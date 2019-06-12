<?php



class DSFieldList extends Extension {

	/**
	 * A list of ignored fields that should not take on DS transforms
	 * @var array
	 */
	protected $ignores = array ();

	/**
	 * Transforms all fields in the FieldList to use DS templates
	 * @return FieldList
	 */
	public function dsify() {		
		foreach($this->owner as $f) {

			$sng = Injector::inst()->get($f->class, true, ['dummy', '']);

			if(isset($this->ignores[$f->getName()])) continue;

            // if we have a CompositeField, dsify its children
            if($f instanceof CompositeField) {
                $f->getChildren()->dsify();
                continue;
            }

			// If we have a Tabset, dsify all Tabs
			if($f instanceof TabSet) {
				$f->Tabs()->dsify();
			}

			// If we have a Tab, dsify all its Fields
			if($f instanceof Tab) {
				$f->Fields()->dsify();
			}

			// If the user has customised the holder template already, don't apply the default one.
			if($sng->getFieldHolderTemplate() == $f->getFieldHolderTemplate()) {
				$template = "DS{$f->class}_holder";			
				if(SSViewer::hasTemplate($template)) {					
					$f->setFieldHolderTemplate($template);				
				}
				else {				
					$f->setFieldHolderTemplate("DSFieldHolder");
				}

			}

			// If the user has customised the field template already, don't apply the default one.
			if($sng->getTemplate() == $f->getTemplate()) {
				foreach(array_reverse(ClassInfo::ancestry($f)) as $className) {						
					$dsCandidate = "DS{$className}";
					$nativeCandidate = $className;
					if(SSViewer::hasTemplate($dsCandidate)) {
						$f->setTemplate($dsCandidate);
						break;
					}
					elseif(SSViewer::hasTemplate($nativeCandidate)) {
						$f->setTemplate($nativeCandidate);
						break;
					}


				}
			}
		}

		return $this->owner;		
	}

	/**
	 * Adds this field as ignored. Should not take on boostrap transformation
	 * 
	 * @param  string $field The name of the form field
	 * @return FieldList
	 */
	public function dsIgnore($field) {
		$this->ignores[$field] = true;

		return $this->owner;
	}
}
