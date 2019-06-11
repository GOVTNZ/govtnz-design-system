<?php

namespace Symbiote\Components;

use Injector;
use SSTemplateParser;

/*
WARNING: This file has been machine generated. Do not edit it, or your changes will be overwritten next time it is compiled.
*/




/**
 * NOTE(Jake): 2018-03-31
 *
 * We aren't using "trait" for this as overriding "protected" variables
 * from "Template" / "TopTemplate" blocks won't work in strict mode in
 * PHP versions 5.X
 */
class ComponentTemplateParser extends SSTemplateParser
{
    /* Template: (Comment | Translate | If | Require | CacheBlock | UncachedBlock | OldI18NTag | Include | ClosedBlock |
    OpenBlock | MalformedBlock | Injection | Text | Component | ComponentSelfClosing)+ */
    protected $match_Template_typestack = array('Template');
    function match_Template ($stack = array()) {
    	$matchrule = "Template"; $result = $this->construct($matchrule, $matchrule, null);
    	$count = 0;
    	while (true) {
    		$res_58 = $result;
    		$pos_58 = $this->pos;
    		$_57 = NULL;
    		do {
    			$_55 = NULL;
    			do {
    				$res_0 = $result;
    				$pos_0 = $this->pos;
    				$matcher = 'match_'.'Comment'; $key = $matcher; $pos = $this->pos;
    				$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    				if ($subres !== FALSE) {
    					$this->store( $result, $subres );
    					$_55 = TRUE; break;
    				}
    				$result = $res_0;
    				$this->pos = $pos_0;
    				$_53 = NULL;
    				do {
    					$res_2 = $result;
    					$pos_2 = $this->pos;
    					$matcher = 'match_'.'Translate'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    						$_53 = TRUE; break;
    					}
    					$result = $res_2;
    					$this->pos = $pos_2;
    					$_51 = NULL;
    					do {
    						$res_4 = $result;
    						$pos_4 = $this->pos;
    						$matcher = 'match_'.'If'; $key = $matcher; $pos = $this->pos;
    						$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    						if ($subres !== FALSE) {
    							$this->store( $result, $subres );
    							$_51 = TRUE; break;
    						}
    						$result = $res_4;
    						$this->pos = $pos_4;
    						$_49 = NULL;
    						do {
    							$res_6 = $result;
    							$pos_6 = $this->pos;
    							$matcher = 'match_'.'Require'; $key = $matcher; $pos = $this->pos;
    							$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    							if ($subres !== FALSE) {
    								$this->store( $result, $subres );
    								$_49 = TRUE; break;
    							}
    							$result = $res_6;
    							$this->pos = $pos_6;
    							$_47 = NULL;
    							do {
    								$res_8 = $result;
    								$pos_8 = $this->pos;
    								$matcher = 'match_'.'CacheBlock'; $key = $matcher; $pos = $this->pos;
    								$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    								if ($subres !== FALSE) {
    									$this->store( $result, $subres );
    									$_47 = TRUE; break;
    								}
    								$result = $res_8;
    								$this->pos = $pos_8;
    								$_45 = NULL;
    								do {
    									$res_10 = $result;
    									$pos_10 = $this->pos;
    									$matcher = 'match_'.'UncachedBlock'; $key = $matcher; $pos = $this->pos;
    									$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    									if ($subres !== FALSE) {
    										$this->store( $result, $subres );
    										$_45 = TRUE; break;
    									}
    									$result = $res_10;
    									$this->pos = $pos_10;
    									$_43 = NULL;
    									do {
    										$res_12 = $result;
    										$pos_12 = $this->pos;
    										$matcher = 'match_'.'OldI18NTag'; $key = $matcher; $pos = $this->pos;
    										$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    										if ($subres !== FALSE) {
    											$this->store( $result, $subres );
    											$_43 = TRUE; break;
    										}
    										$result = $res_12;
    										$this->pos = $pos_12;
    										$_41 = NULL;
    										do {
    											$res_14 = $result;
    											$pos_14 = $this->pos;
    											$matcher = 'match_'.'Include'; $key = $matcher; $pos = $this->pos;
    											$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    											if ($subres !== FALSE) {
    												$this->store( $result, $subres );
    												$_41 = TRUE; break;
    											}
    											$result = $res_14;
    											$this->pos = $pos_14;
    											$_39 = NULL;
    											do {
    												$res_16 = $result;
    												$pos_16 = $this->pos;
    												$matcher = 'match_'.'ClosedBlock'; $key = $matcher; $pos = $this->pos;
    												$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    												if ($subres !== FALSE) {
    													$this->store( $result, $subres );
    													$_39 = TRUE; break;
    												}
    												$result = $res_16;
    												$this->pos = $pos_16;
    												$_37 = NULL;
    												do {
    													$res_18 = $result;
    													$pos_18 = $this->pos;
    													$matcher = 'match_'.'OpenBlock'; $key = $matcher; $pos = $this->pos;
    													$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    													if ($subres !== FALSE) {
    														$this->store( $result, $subres );
    														$_37 = TRUE; break;
    													}
    													$result = $res_18;
    													$this->pos = $pos_18;
    													$_35 = NULL;
    													do {
    														$res_20 = $result;
    														$pos_20 = $this->pos;
    														$matcher = 'match_'.'MalformedBlock'; $key = $matcher; $pos = $this->pos;
    														$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    														if ($subres !== FALSE) {
    															$this->store( $result, $subres );
    															$_35 = TRUE; break;
    														}
    														$result = $res_20;
    														$this->pos = $pos_20;
    														$_33 = NULL;
    														do {
    															$res_22 = $result;
    															$pos_22 = $this->pos;
    															$matcher = 'match_'.'Injection'; $key = $matcher; $pos = $this->pos;
    															$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    															if ($subres !== FALSE) {
    																$this->store( $result, $subres );
    																$_33 = TRUE; break;
    															}
    															$result = $res_22;
    															$this->pos = $pos_22;
    															$_31 = NULL;
    															do {
    																$res_24 = $result;
    																$pos_24 = $this->pos;
    																$matcher = 'match_'.'Text'; $key = $matcher; $pos = $this->pos;
    																$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    																if ($subres !== FALSE) {
    																	$this->store( $result, $subres );
    																	$_31 = TRUE; break;
    																}
    																$result = $res_24;
    																$this->pos = $pos_24;
    																$_29 = NULL;
    																do {
    																	$res_26 = $result;
    																	$pos_26 = $this->pos;
    																	$matcher = 'match_'.'Component'; $key = $matcher; $pos = $this->pos;
    																	$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    																	if ($subres !== FALSE) {
    																		$this->store( $result, $subres );
    																		$_29 = TRUE; break;
    																	}
    																	$result = $res_26;
    																	$this->pos = $pos_26;
    																	$matcher = 'match_'.'ComponentSelfClosing'; $key = $matcher; $pos = $this->pos;
    																	$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    																	if ($subres !== FALSE) {
    																		$this->store( $result, $subres );
    																		$_29 = TRUE; break;
    																	}
    																	$result = $res_26;
    																	$this->pos = $pos_26;
    																	$_29 = FALSE; break;
    																}
    																while(0);
    																if( $_29 === TRUE ) {
    																	$_31 = TRUE; break;
    																}
    																$result = $res_24;
    																$this->pos = $pos_24;
    																$_31 = FALSE; break;
    															}
    															while(0);
    															if( $_31 === TRUE ) { $_33 = TRUE; break; }
    															$result = $res_22;
    															$this->pos = $pos_22;
    															$_33 = FALSE; break;
    														}
    														while(0);
    														if( $_33 === TRUE ) { $_35 = TRUE; break; }
    														$result = $res_20;
    														$this->pos = $pos_20;
    														$_35 = FALSE; break;
    													}
    													while(0);
    													if( $_35 === TRUE ) { $_37 = TRUE; break; }
    													$result = $res_18;
    													$this->pos = $pos_18;
    													$_37 = FALSE; break;
    												}
    												while(0);
    												if( $_37 === TRUE ) { $_39 = TRUE; break; }
    												$result = $res_16;
    												$this->pos = $pos_16;
    												$_39 = FALSE; break;
    											}
    											while(0);
    											if( $_39 === TRUE ) { $_41 = TRUE; break; }
    											$result = $res_14;
    											$this->pos = $pos_14;
    											$_41 = FALSE; break;
    										}
    										while(0);
    										if( $_41 === TRUE ) { $_43 = TRUE; break; }
    										$result = $res_12;
    										$this->pos = $pos_12;
    										$_43 = FALSE; break;
    									}
    									while(0);
    									if( $_43 === TRUE ) { $_45 = TRUE; break; }
    									$result = $res_10;
    									$this->pos = $pos_10;
    									$_45 = FALSE; break;
    								}
    								while(0);
    								if( $_45 === TRUE ) { $_47 = TRUE; break; }
    								$result = $res_8;
    								$this->pos = $pos_8;
    								$_47 = FALSE; break;
    							}
    							while(0);
    							if( $_47 === TRUE ) { $_49 = TRUE; break; }
    							$result = $res_6;
    							$this->pos = $pos_6;
    							$_49 = FALSE; break;
    						}
    						while(0);
    						if( $_49 === TRUE ) { $_51 = TRUE; break; }
    						$result = $res_4;
    						$this->pos = $pos_4;
    						$_51 = FALSE; break;
    					}
    					while(0);
    					if( $_51 === TRUE ) { $_53 = TRUE; break; }
    					$result = $res_2;
    					$this->pos = $pos_2;
    					$_53 = FALSE; break;
    				}
    				while(0);
    				if( $_53 === TRUE ) { $_55 = TRUE; break; }
    				$result = $res_0;
    				$this->pos = $pos_0;
    				$_55 = FALSE; break;
    			}
    			while(0);
    			if( $_55 === FALSE) { $_57 = FALSE; break; }
    			$_57 = TRUE; break;
    		}
    		while(0);
    		if( $_57 === FALSE) {
    			$result = $res_58;
    			$this->pos = $pos_58;
    			unset( $res_58 );
    			unset( $pos_58 );
    			break;
    		}
    		$count += 1;
    	}
    	if ($count > 0) { return $this->finalise($result); }
    	else { return FALSE; }
    }




    /* TopTemplate: (Comment | Translate | If | Require | CacheBlock | UncachedBlock | OldI18NTag | Include | ClosedBlock |
    OpenBlock |  MalformedBlock | MismatchedEndBlock  | Injection | Text | Component | ComponentSelfClosing)+ */
    protected $match_TopTemplate_typestack = array('TopTemplate','Template');
    function match_TopTemplate ($stack = array()) {
    	$matchrule = "TopTemplate"; $result = $this->construct($matchrule, $matchrule, array('TemplateMatcher' => 'Template'));
    	$count = 0;
    	while (true) {
    		$res_121 = $result;
    		$pos_121 = $this->pos;
    		$_120 = NULL;
    		do {
    			$_118 = NULL;
    			do {
    				$res_59 = $result;
    				$pos_59 = $this->pos;
    				$matcher = 'match_'.'Comment'; $key = $matcher; $pos = $this->pos;
    				$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    				if ($subres !== FALSE) {
    					$this->store( $result, $subres );
    					$_118 = TRUE; break;
    				}
    				$result = $res_59;
    				$this->pos = $pos_59;
    				$_116 = NULL;
    				do {
    					$res_61 = $result;
    					$pos_61 = $this->pos;
    					$matcher = 'match_'.'Translate'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    						$_116 = TRUE; break;
    					}
    					$result = $res_61;
    					$this->pos = $pos_61;
    					$_114 = NULL;
    					do {
    						$res_63 = $result;
    						$pos_63 = $this->pos;
    						$matcher = 'match_'.'If'; $key = $matcher; $pos = $this->pos;
    						$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    						if ($subres !== FALSE) {
    							$this->store( $result, $subres );
    							$_114 = TRUE; break;
    						}
    						$result = $res_63;
    						$this->pos = $pos_63;
    						$_112 = NULL;
    						do {
    							$res_65 = $result;
    							$pos_65 = $this->pos;
    							$matcher = 'match_'.'Require'; $key = $matcher; $pos = $this->pos;
    							$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    							if ($subres !== FALSE) {
    								$this->store( $result, $subres );
    								$_112 = TRUE; break;
    							}
    							$result = $res_65;
    							$this->pos = $pos_65;
    							$_110 = NULL;
    							do {
    								$res_67 = $result;
    								$pos_67 = $this->pos;
    								$matcher = 'match_'.'CacheBlock'; $key = $matcher; $pos = $this->pos;
    								$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    								if ($subres !== FALSE) {
    									$this->store( $result, $subres );
    									$_110 = TRUE; break;
    								}
    								$result = $res_67;
    								$this->pos = $pos_67;
    								$_108 = NULL;
    								do {
    									$res_69 = $result;
    									$pos_69 = $this->pos;
    									$matcher = 'match_'.'UncachedBlock'; $key = $matcher; $pos = $this->pos;
    									$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    									if ($subres !== FALSE) {
    										$this->store( $result, $subres );
    										$_108 = TRUE; break;
    									}
    									$result = $res_69;
    									$this->pos = $pos_69;
    									$_106 = NULL;
    									do {
    										$res_71 = $result;
    										$pos_71 = $this->pos;
    										$matcher = 'match_'.'OldI18NTag'; $key = $matcher; $pos = $this->pos;
    										$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    										if ($subres !== FALSE) {
    											$this->store( $result, $subres );
    											$_106 = TRUE; break;
    										}
    										$result = $res_71;
    										$this->pos = $pos_71;
    										$_104 = NULL;
    										do {
    											$res_73 = $result;
    											$pos_73 = $this->pos;
    											$matcher = 'match_'.'Include'; $key = $matcher; $pos = $this->pos;
    											$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    											if ($subres !== FALSE) {
    												$this->store( $result, $subres );
    												$_104 = TRUE; break;
    											}
    											$result = $res_73;
    											$this->pos = $pos_73;
    											$_102 = NULL;
    											do {
    												$res_75 = $result;
    												$pos_75 = $this->pos;
    												$matcher = 'match_'.'ClosedBlock'; $key = $matcher; $pos = $this->pos;
    												$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    												if ($subres !== FALSE) {
    													$this->store( $result, $subres );
    													$_102 = TRUE; break;
    												}
    												$result = $res_75;
    												$this->pos = $pos_75;
    												$_100 = NULL;
    												do {
    													$res_77 = $result;
    													$pos_77 = $this->pos;
    													$matcher = 'match_'.'OpenBlock'; $key = $matcher; $pos = $this->pos;
    													$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    													if ($subres !== FALSE) {
    														$this->store( $result, $subres );
    														$_100 = TRUE; break;
    													}
    													$result = $res_77;
    													$this->pos = $pos_77;
    													$_98 = NULL;
    													do {
    														$res_79 = $result;
    														$pos_79 = $this->pos;
    														$matcher = 'match_'.'MalformedBlock'; $key = $matcher; $pos = $this->pos;
    														$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    														if ($subres !== FALSE) {
    															$this->store( $result, $subres );
    															$_98 = TRUE; break;
    														}
    														$result = $res_79;
    														$this->pos = $pos_79;
    														$_96 = NULL;
    														do {
    															$res_81 = $result;
    															$pos_81 = $this->pos;
    															$matcher = 'match_'.'MismatchedEndBlock'; $key = $matcher; $pos = $this->pos;
    															$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    															if ($subres !== FALSE) {
    																$this->store( $result, $subres );
    																$_96 = TRUE; break;
    															}
    															$result = $res_81;
    															$this->pos = $pos_81;
    															$_94 = NULL;
    															do {
    																$res_83 = $result;
    																$pos_83 = $this->pos;
    																$matcher = 'match_'.'Injection'; $key = $matcher; $pos = $this->pos;
    																$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    																if ($subres !== FALSE) {
    																	$this->store( $result, $subres );
    																	$_94 = TRUE; break;
    																}
    																$result = $res_83;
    																$this->pos = $pos_83;
    																$_92 = NULL;
    																do {
    																	$res_85 = $result;
    																	$pos_85 = $this->pos;
    																	$matcher = 'match_'.'Text'; $key = $matcher; $pos = $this->pos;
    																	$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    																	if ($subres !== FALSE) {
    																		$this->store( $result, $subres );
    																		$_92 = TRUE; break;
    																	}
    																	$result = $res_85;
    																	$this->pos = $pos_85;
    																	$_90 = NULL;
    																	do {
    																		$res_87 = $result;
    																		$pos_87 = $this->pos;
    																		$matcher = 'match_'.'Component'; $key = $matcher; $pos = $this->pos;
    																		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    																		if ($subres !== FALSE) {
    																			$this->store( $result, $subres );
    																			$_90 = TRUE; break;
    																		}
    																		$result = $res_87;
    																		$this->pos = $pos_87;
    																		$matcher = 'match_'.'ComponentSelfClosing'; $key = $matcher; $pos = $this->pos;
    																		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    																		if ($subres !== FALSE) {
    																			$this->store( $result, $subres );
    																			$_90 = TRUE; break;
    																		}
    																		$result = $res_87;
    																		$this->pos = $pos_87;
    																		$_90 = FALSE; break;
    																	}
    																	while(0);
    																	if( $_90 === TRUE ) {
    																		$_92 = TRUE; break;
    																	}
    																	$result = $res_85;
    																	$this->pos = $pos_85;
    																	$_92 = FALSE; break;
    																}
    																while(0);
    																if( $_92 === TRUE ) {
    																	$_94 = TRUE; break;
    																}
    																$result = $res_83;
    																$this->pos = $pos_83;
    																$_94 = FALSE; break;
    															}
    															while(0);
    															if( $_94 === TRUE ) { $_96 = TRUE; break; }
    															$result = $res_81;
    															$this->pos = $pos_81;
    															$_96 = FALSE; break;
    														}
    														while(0);
    														if( $_96 === TRUE ) { $_98 = TRUE; break; }
    														$result = $res_79;
    														$this->pos = $pos_79;
    														$_98 = FALSE; break;
    													}
    													while(0);
    													if( $_98 === TRUE ) { $_100 = TRUE; break; }
    													$result = $res_77;
    													$this->pos = $pos_77;
    													$_100 = FALSE; break;
    												}
    												while(0);
    												if( $_100 === TRUE ) { $_102 = TRUE; break; }
    												$result = $res_75;
    												$this->pos = $pos_75;
    												$_102 = FALSE; break;
    											}
    											while(0);
    											if( $_102 === TRUE ) { $_104 = TRUE; break; }
    											$result = $res_73;
    											$this->pos = $pos_73;
    											$_104 = FALSE; break;
    										}
    										while(0);
    										if( $_104 === TRUE ) { $_106 = TRUE; break; }
    										$result = $res_71;
    										$this->pos = $pos_71;
    										$_106 = FALSE; break;
    									}
    									while(0);
    									if( $_106 === TRUE ) { $_108 = TRUE; break; }
    									$result = $res_69;
    									$this->pos = $pos_69;
    									$_108 = FALSE; break;
    								}
    								while(0);
    								if( $_108 === TRUE ) { $_110 = TRUE; break; }
    								$result = $res_67;
    								$this->pos = $pos_67;
    								$_110 = FALSE; break;
    							}
    							while(0);
    							if( $_110 === TRUE ) { $_112 = TRUE; break; }
    							$result = $res_65;
    							$this->pos = $pos_65;
    							$_112 = FALSE; break;
    						}
    						while(0);
    						if( $_112 === TRUE ) { $_114 = TRUE; break; }
    						$result = $res_63;
    						$this->pos = $pos_63;
    						$_114 = FALSE; break;
    					}
    					while(0);
    					if( $_114 === TRUE ) { $_116 = TRUE; break; }
    					$result = $res_61;
    					$this->pos = $pos_61;
    					$_116 = FALSE; break;
    				}
    				while(0);
    				if( $_116 === TRUE ) { $_118 = TRUE; break; }
    				$result = $res_59;
    				$this->pos = $pos_59;
    				$_118 = FALSE; break;
    			}
    			while(0);
    			if( $_118 === FALSE) { $_120 = FALSE; break; }
    			$_120 = TRUE; break;
    		}
    		while(0);
    		if( $_120 === FALSE) {
    			$result = $res_121;
    			$this->pos = $pos_121;
    			unset( $res_121 );
    			unset( $pos_121 );
    			break;
    		}
    		$count += 1;
    	}
    	if ($count > 0) { return $this->finalise($result); }
    	else { return FALSE; }
    }




    /* NamedArgument: Name:Word "=" Value:Argument */
    protected $match_NamedArgument_typestack = array('NamedArgument');
    function match_NamedArgument ($stack = array()) {
    	$matchrule = "NamedArgument"; $result = $this->construct($matchrule, $matchrule, null);
    	$_125 = NULL;
    	do {
    		$matcher = 'match_'.'Word'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "Name" );
    		}
    		else { $_125 = FALSE; break; }
    		if (substr($this->string,$this->pos,1) == '=') {
    			$this->pos += 1;
    			$result["text"] .= '=';
    		}
    		else { $_125 = FALSE; break; }
    		$matcher = 'match_'.'Argument'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "Value" );
    		}
    		else { $_125 = FALSE; break; }
    		$_125 = TRUE; break;
    	}
    	while(0);
    	if( $_125 === TRUE ) { return $this->finalise($result); }
    	if( $_125 === FALSE) { return FALSE; }
    }




    /* ComposedArgumentString: / (\\\\ | \\. | [^$q\\]) / */
    protected $match_ComposedArgumentString_typestack = array('ComposedArgumentString');
    function match_ComposedArgumentString ($stack = array()) {
    	$matchrule = "ComposedArgumentString"; $result = $this->construct($matchrule, $matchrule, null);
    	if (( $subres = $this->rx( '/ (\\\\\\\\ | \\\\. | [^'.$this->expression($result, $stack, 'q').'\\\\]) /' ) ) !== FALSE) {
    		$result["text"] .= $subres;
    		return $this->finalise($result);
    	}
    	else { return FALSE; }
    }


    /* ComposedArgumentInjection: BracketInjection | SimpleInjection | If */
    protected $match_ComposedArgumentInjection_typestack = array('ComposedArgumentInjection');
    function match_ComposedArgumentInjection ($stack = array()) {
    	$matchrule = "ComposedArgumentInjection"; $result = $this->construct($matchrule, $matchrule, null);
    	$_135 = NULL;
    	do {
    		$res_128 = $result;
    		$pos_128 = $this->pos;
    		$matcher = 'match_'.'BracketInjection'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    			$_135 = TRUE; break;
    		}
    		$result = $res_128;
    		$this->pos = $pos_128;
    		$_133 = NULL;
    		do {
    			$res_130 = $result;
    			$pos_130 = $this->pos;
    			$matcher = 'match_'.'SimpleInjection'; $key = $matcher; $pos = $this->pos;
    			$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    			if ($subres !== FALSE) {
    				$this->store( $result, $subres );
    				$_133 = TRUE; break;
    			}
    			$result = $res_130;
    			$this->pos = $pos_130;
    			$matcher = 'match_'.'If'; $key = $matcher; $pos = $this->pos;
    			$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    			if ($subres !== FALSE) {
    				$this->store( $result, $subres );
    				$_133 = TRUE; break;
    			}
    			$result = $res_130;
    			$this->pos = $pos_130;
    			$_133 = FALSE; break;
    		}
    		while(0);
    		if( $_133 === TRUE ) { $_135 = TRUE; break; }
    		$result = $res_128;
    		$this->pos = $pos_128;
    		$_135 = FALSE; break;
    	}
    	while(0);
    	if( $_135 === TRUE ) { return $this->finalise($result); }
    	if( $_135 === FALSE) { return FALSE; }
    }


    /* ComposedArgumentQuotedString: q:/['"]/ ( ComposedArgumentInjection | ComposedArgumentString )* '$q' */
    protected $match_ComposedArgumentQuotedString_typestack = array('ComposedArgumentQuotedString');
    function match_ComposedArgumentQuotedString ($stack = array()) {
    	$matchrule = "ComposedArgumentQuotedString"; $result = $this->construct($matchrule, $matchrule, null);
    	$_146 = NULL;
    	do {
    		$stack[] = $result; $result = $this->construct( $matchrule, "q" ); 
    		if (( $subres = $this->rx( '/[\'"]/' ) ) !== FALSE) {
    			$result["text"] .= $subres;
    			$subres = $result; $result = array_pop($stack);
    			$this->store( $result, $subres, 'q' );
    		}
    		else {
    			$result = array_pop($stack);
    			$_146 = FALSE; break;
    		}
    		while (true) {
    			$res_144 = $result;
    			$pos_144 = $this->pos;
    			$_143 = NULL;
    			do {
    				$_141 = NULL;
    				do {
    					$res_138 = $result;
    					$pos_138 = $this->pos;
    					$matcher = 'match_'.'ComposedArgumentInjection'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    						$_141 = TRUE; break;
    					}
    					$result = $res_138;
    					$this->pos = $pos_138;
    					$matcher = 'match_'.'ComposedArgumentString'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    						$_141 = TRUE; break;
    					}
    					$result = $res_138;
    					$this->pos = $pos_138;
    					$_141 = FALSE; break;
    				}
    				while(0);
    				if( $_141 === FALSE) { $_143 = FALSE; break; }
    				$_143 = TRUE; break;
    			}
    			while(0);
    			if( $_143 === FALSE) {
    				$result = $res_144;
    				$this->pos = $pos_144;
    				unset( $res_144 );
    				unset( $pos_144 );
    				break;
    			}
    		}
    		if (( $subres = $this->literal( ''.$this->expression($result, $stack, 'q').'' ) ) !== FALSE) { $result["text"] .= $subres; }
    		else { $_146 = FALSE; break; }
    		$_146 = TRUE; break;
    	}
    	while(0);
    	if( $_146 === TRUE ) { return $this->finalise($result); }
    	if( $_146 === FALSE) { return FALSE; }
    }


    /* Argument:
    :DollarMarkedLookup |
    :QuotedString |
    :Lookup !(< FreeString)|
    :FreeString */
    protected $match_Argument_typestack = array('Argument');
    function match_Argument ($stack = array()) {
    	$matchrule = "Argument"; $result = $this->construct($matchrule, $matchrule, null);
    	$_165 = NULL;
    	do {
    		$res_148 = $result;
    		$pos_148 = $this->pos;
    		$matcher = 'match_'.'DollarMarkedLookup'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "DollarMarkedLookup" );
    			$_165 = TRUE; break;
    		}
    		$result = $res_148;
    		$this->pos = $pos_148;
    		$_163 = NULL;
    		do {
    			$res_150 = $result;
    			$pos_150 = $this->pos;
    			$matcher = 'match_'.'QuotedString'; $key = $matcher; $pos = $this->pos;
    			$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    			if ($subres !== FALSE) {
    				$this->store( $result, $subres, "QuotedString" );
    				$_163 = TRUE; break;
    			}
    			$result = $res_150;
    			$this->pos = $pos_150;
    			$_161 = NULL;
    			do {
    				$res_152 = $result;
    				$pos_152 = $this->pos;
    				$_158 = NULL;
    				do {
    					$matcher = 'match_'.'Lookup'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres, "Lookup" );
    					}
    					else { $_158 = FALSE; break; }
    					$res_157 = $result;
    					$pos_157 = $this->pos;
    					$_156 = NULL;
    					do {
    						if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    						$matcher = 'match_'.'FreeString'; $key = $matcher; $pos = $this->pos;
    						$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    						if ($subres !== FALSE) {
    							$this->store( $result, $subres );
    						}
    						else { $_156 = FALSE; break; }
    						$_156 = TRUE; break;
    					}
    					while(0);
    					if( $_156 === TRUE ) {
    						$result = $res_157;
    						$this->pos = $pos_157;
    						$_158 = FALSE; break;
    					}
    					if( $_156 === FALSE) {
    						$result = $res_157;
    						$this->pos = $pos_157;
    					}
    					$_158 = TRUE; break;
    				}
    				while(0);
    				if( $_158 === TRUE ) { $_161 = TRUE; break; }
    				$result = $res_152;
    				$this->pos = $pos_152;
    				$matcher = 'match_'.'FreeString'; $key = $matcher; $pos = $this->pos;
    				$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    				if ($subres !== FALSE) {
    					$this->store( $result, $subres, "FreeString" );
    					$_161 = TRUE; break;
    				}
    				$result = $res_152;
    				$this->pos = $pos_152;
    				$_161 = FALSE; break;
    			}
    			while(0);
    			if( $_161 === TRUE ) { $_163 = TRUE; break; }
    			$result = $res_150;
    			$this->pos = $pos_150;
    			$_163 = FALSE; break;
    		}
    		while(0);
    		if( $_163 === TRUE ) { $_165 = TRUE; break; }
    		$result = $res_148;
    		$this->pos = $pos_148;
    		$_165 = FALSE; break;
    	}
    	while(0);
    	if( $_165 === TRUE ) { return $this->finalise($result); }
    	if( $_165 === FALSE) { return FALSE; }
    }


    /* ComposedArgument:
    '{' < :IfArgument > '}' |
    :DollarMarkedLookup |
    :ComposedArgumentQuotedString |
    :Lookup !(< FreeString)|
    :FreeString */
    protected $match_ComposedArgument_typestack = array('ComposedArgument','Argument');
    function match_ComposedArgument ($stack = array()) {
    	$matchrule = "ComposedArgument"; $result = $this->construct($matchrule, $matchrule, null);
    	$_194 = NULL;
    	do {
    		$res_167 = $result;
    		$pos_167 = $this->pos;
    		$_173 = NULL;
    		do {
    			if (substr($this->string,$this->pos,1) == '{') {
    				$this->pos += 1;
    				$result["text"] .= '{';
    			}
    			else { $_173 = FALSE; break; }
    			if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    			$matcher = 'match_'.'IfArgument'; $key = $matcher; $pos = $this->pos;
    			$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    			if ($subres !== FALSE) {
    				$this->store( $result, $subres, "IfArgument" );
    			}
    			else { $_173 = FALSE; break; }
    			if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    			if (substr($this->string,$this->pos,1) == '}') {
    				$this->pos += 1;
    				$result["text"] .= '}';
    			}
    			else { $_173 = FALSE; break; }
    			$_173 = TRUE; break;
    		}
    		while(0);
    		if( $_173 === TRUE ) { $_194 = TRUE; break; }
    		$result = $res_167;
    		$this->pos = $pos_167;
    		$_192 = NULL;
    		do {
    			$res_175 = $result;
    			$pos_175 = $this->pos;
    			$matcher = 'match_'.'DollarMarkedLookup'; $key = $matcher; $pos = $this->pos;
    			$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    			if ($subres !== FALSE) {
    				$this->store( $result, $subres, "DollarMarkedLookup" );
    				$_192 = TRUE; break;
    			}
    			$result = $res_175;
    			$this->pos = $pos_175;
    			$_190 = NULL;
    			do {
    				$res_177 = $result;
    				$pos_177 = $this->pos;
    				$matcher = 'match_'.'ComposedArgumentQuotedString'; $key = $matcher; $pos = $this->pos;
    				$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    				if ($subres !== FALSE) {
    					$this->store( $result, $subres, "ComposedArgumentQuotedString" );
    					$_190 = TRUE; break;
    				}
    				$result = $res_177;
    				$this->pos = $pos_177;
    				$_188 = NULL;
    				do {
    					$res_179 = $result;
    					$pos_179 = $this->pos;
    					$_185 = NULL;
    					do {
    						$matcher = 'match_'.'Lookup'; $key = $matcher; $pos = $this->pos;
    						$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    						if ($subres !== FALSE) {
    							$this->store( $result, $subres, "Lookup" );
    						}
    						else { $_185 = FALSE; break; }
    						$res_184 = $result;
    						$pos_184 = $this->pos;
    						$_183 = NULL;
    						do {
    							if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    							$matcher = 'match_'.'FreeString'; $key = $matcher; $pos = $this->pos;
    							$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    							if ($subres !== FALSE) {
    								$this->store( $result, $subres );
    							}
    							else { $_183 = FALSE; break; }
    							$_183 = TRUE; break;
    						}
    						while(0);
    						if( $_183 === TRUE ) {
    							$result = $res_184;
    							$this->pos = $pos_184;
    							$_185 = FALSE; break;
    						}
    						if( $_183 === FALSE) {
    							$result = $res_184;
    							$this->pos = $pos_184;
    						}
    						$_185 = TRUE; break;
    					}
    					while(0);
    					if( $_185 === TRUE ) { $_188 = TRUE; break; }
    					$result = $res_179;
    					$this->pos = $pos_179;
    					$matcher = 'match_'.'FreeString'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres, "FreeString" );
    						$_188 = TRUE; break;
    					}
    					$result = $res_179;
    					$this->pos = $pos_179;
    					$_188 = FALSE; break;
    				}
    				while(0);
    				if( $_188 === TRUE ) { $_190 = TRUE; break; }
    				$result = $res_177;
    				$this->pos = $pos_177;
    				$_190 = FALSE; break;
    			}
    			while(0);
    			if( $_190 === TRUE ) { $_192 = TRUE; break; }
    			$result = $res_175;
    			$this->pos = $pos_175;
    			$_192 = FALSE; break;
    		}
    		while(0);
    		if( $_192 === TRUE ) { $_194 = TRUE; break; }
    		$result = $res_167;
    		$this->pos = $pos_167;
    		$_194 = FALSE; break;
    	}
    	while(0);
    	if( $_194 === TRUE ) { return $this->finalise($result); }
    	if( $_194 === FALSE) { return FALSE; }
    }



    function ComposedArgumentInjection_STR(&$res, $sub)
    {
        $obj = str_replace('$$FINAL', 'obj', $sub['Lookup']['php']) . '->self()';
        // NOTE: CFP == Component Field Part
        $res['php'] = "'[_CFP]".$obj."[_CFP]'";
    }

    function ComposedArgumentInjection_If(&$res, $sub)
    {
        $res['php'] = <<<PHP
' [_CPB] {$sub['php']} [_CPB] '
PHP;
    }

    function ComposedArgumentQuotedString_ComposedArgumentString(&$res, $sub)
    {
        $res['php'] .= str_replace(array("\\", "'"), array("\\\\", "\\'"), $sub['text']);
    }

    function ComposedArgumentQuotedString_ComposedArgumentInjection(&$res, $sub)
    {
        $res['php'] .= $sub['php'];
    }

    function ComposedArgument_ComposedArgumentQuotedString(&$res, $sub)
    {
        $res['ArgumentMode'] = 'string';
        $php = $sub['php'];
        $res['php'] = "'" . $php . "'";
    }

    function ComposedArgument_IfArgument(&$res, $sub)
    {
        $res['ArgumentMode'] = 'string';
        $res['php'] = $sub['php'];
    }


    /* ComposeWord: / [A-Za-z_] [A-Za-z0-9_\-]* / */
    protected $match_ComposeWord_typestack = array('ComposeWord');
    function match_ComposeWord ($stack = array()) {
    	$matchrule = "ComposeWord"; $result = $this->construct($matchrule, $matchrule, null);
    	if (( $subres = $this->rx( '/ [A-Za-z_] [A-Za-z0-9_\-]* /' ) ) !== FALSE) {
    		$result["text"] .= $subres;
    		return $this->finalise($result);
    	}
    	else { return FALSE; }
    }


    /* ComposedNamedArgument: Name:ComposeWord "=" Value:ComposedArgument */
    protected $match_ComposedNamedArgument_typestack = array('ComposedNamedArgument','NamedArgument');
    function match_ComposedNamedArgument ($stack = array()) {
    	$matchrule = "ComposedNamedArgument"; $result = $this->construct($matchrule, $matchrule, null);
    	$_200 = NULL;
    	do {
    		$matcher = 'match_'.'ComposeWord'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "Name" );
    		}
    		else { $_200 = FALSE; break; }
    		if (substr($this->string,$this->pos,1) == '=') {
    			$this->pos += 1;
    			$result["text"] .= '=';
    		}
    		else { $_200 = FALSE; break; }
    		$matcher = 'match_'.'ComposedArgument'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "Value" );
    		}
    		else { $_200 = FALSE; break; }
    		$_200 = TRUE; break;
    	}
    	while(0);
    	if( $_200 === TRUE ) { return $this->finalise($result); }
    	if( $_200 === FALSE) { return FALSE; }
    }




    /* N: / [\s\n]* / */
    protected $match_N_typestack = array('N');
    function match_N ($stack = array()) {
    	$matchrule = "N"; $result = $this->construct($matchrule, $matchrule, null);
    	if (( $subres = $this->rx( '/ [\s\n]* /' ) ) !== FALSE) {
    		$result["text"] .= $subres;
    		return $this->finalise($result);
    	}
    	else { return FALSE; }
    }


    /* Component: '<:' ComponentName:Word N < (ComposedNamedArgument ( N < ComposedNamedArgument N < )*)? N < N '>' Children:$TemplateMatcher?
    '</:' N < '$ComponentName' N < '>' */
    protected $match_Component_typestack = array('Component');
    function match_Component ($stack = array()) {
    	$matchrule = "Component"; $result = $this->construct($matchrule, $matchrule, null);
    	$_229 = NULL;
    	do {
    		if (( $subres = $this->literal( '<:' ) ) !== FALSE) { $result["text"] .= $subres; }
    		else { $_229 = FALSE; break; }
    		$matcher = 'match_'.'Word'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "ComponentName" );
    		}
    		else { $_229 = FALSE; break; }
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_229 = FALSE; break; }
    		if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    		$res_216 = $result;
    		$pos_216 = $this->pos;
    		$_215 = NULL;
    		do {
    			$matcher = 'match_'.'ComposedNamedArgument'; $key = $matcher; $pos = $this->pos;
    			$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    			if ($subres !== FALSE) {
    				$this->store( $result, $subres );
    			}
    			else { $_215 = FALSE; break; }
    			while (true) {
    				$res_214 = $result;
    				$pos_214 = $this->pos;
    				$_213 = NULL;
    				do {
    					$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    					}
    					else { $_213 = FALSE; break; }
    					if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    					$matcher = 'match_'.'ComposedNamedArgument'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    					}
    					else { $_213 = FALSE; break; }
    					$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    					}
    					else { $_213 = FALSE; break; }
    					if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    					$_213 = TRUE; break;
    				}
    				while(0);
    				if( $_213 === FALSE) {
    					$result = $res_214;
    					$this->pos = $pos_214;
    					unset( $res_214 );
    					unset( $pos_214 );
    					break;
    				}
    			}
    			$_215 = TRUE; break;
    		}
    		while(0);
    		if( $_215 === FALSE) {
    			$result = $res_216;
    			$this->pos = $pos_216;
    			unset( $res_216 );
    			unset( $pos_216 );
    		}
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_229 = FALSE; break; }
    		if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_229 = FALSE; break; }
    		if (substr($this->string,$this->pos,1) == '>') {
    			$this->pos += 1;
    			$result["text"] .= '>';
    		}
    		else { $_229 = FALSE; break; }
    		$res_221 = $result;
    		$pos_221 = $this->pos;
    		$matcher = 'match_'.$this->expression($result, $stack, 'TemplateMatcher'); $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "Children" );
    		}
    		else {
    			$result = $res_221;
    			$this->pos = $pos_221;
    			unset( $res_221 );
    			unset( $pos_221 );
    		}
    		if (( $subres = $this->literal( '</:' ) ) !== FALSE) { $result["text"] .= $subres; }
    		else { $_229 = FALSE; break; }
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_229 = FALSE; break; }
    		if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    		if (( $subres = $this->literal( ''.$this->expression($result, $stack, 'ComponentName').'' ) ) !== FALSE) { $result["text"] .= $subres; }
    		else { $_229 = FALSE; break; }
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_229 = FALSE; break; }
    		if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    		if (substr($this->string,$this->pos,1) == '>') {
    			$this->pos += 1;
    			$result["text"] .= '>';
    		}
    		else { $_229 = FALSE; break; }
    		$_229 = TRUE; break;
    	}
    	while(0);
    	if( $_229 === TRUE ) { return $this->finalise($result); }
    	if( $_229 === FALSE) { return FALSE; }
    }


    /* ComponentSelfClosing: '<:' N < ComponentName:Word N < (ComposedNamedArgument ( N < ComposedNamedArgument N < )*)? N > N '/>' */
    protected $match_ComponentSelfClosing_typestack = array('ComponentSelfClosing','Component');
    function match_ComponentSelfClosing ($stack = array()) {
    	$matchrule = "ComponentSelfClosing"; $result = $this->construct($matchrule, $matchrule, null);
    	$_251 = NULL;
    	do {
    		if (( $subres = $this->literal( '<:' ) ) !== FALSE) { $result["text"] .= $subres; }
    		else { $_251 = FALSE; break; }
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_251 = FALSE; break; }
    		if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    		$matcher = 'match_'.'Word'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres, "ComponentName" );
    		}
    		else { $_251 = FALSE; break; }
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_251 = FALSE; break; }
    		if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    		$res_246 = $result;
    		$pos_246 = $this->pos;
    		$_245 = NULL;
    		do {
    			$matcher = 'match_'.'ComposedNamedArgument'; $key = $matcher; $pos = $this->pos;
    			$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    			if ($subres !== FALSE) {
    				$this->store( $result, $subres );
    			}
    			else { $_245 = FALSE; break; }
    			while (true) {
    				$res_244 = $result;
    				$pos_244 = $this->pos;
    				$_243 = NULL;
    				do {
    					$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    					}
    					else { $_243 = FALSE; break; }
    					if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    					$matcher = 'match_'.'ComposedNamedArgument'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    					}
    					else { $_243 = FALSE; break; }
    					$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    					$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    					if ($subres !== FALSE) {
    						$this->store( $result, $subres );
    					}
    					else { $_243 = FALSE; break; }
    					if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    					$_243 = TRUE; break;
    				}
    				while(0);
    				if( $_243 === FALSE) {
    					$result = $res_244;
    					$this->pos = $pos_244;
    					unset( $res_244 );
    					unset( $pos_244 );
    					break;
    				}
    			}
    			$_245 = TRUE; break;
    		}
    		while(0);
    		if( $_245 === FALSE) {
    			$result = $res_246;
    			$this->pos = $pos_246;
    			unset( $res_246 );
    			unset( $pos_246 );
    		}
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_251 = FALSE; break; }
    		if (( $subres = $this->whitespace(  ) ) !== FALSE) { $result["text"] .= $subres; }
    		$matcher = 'match_'.'N'; $key = $matcher; $pos = $this->pos;
    		$subres = ( $this->packhas( $key, $pos ) ? $this->packread( $key, $pos ) : $this->packwrite( $key, $pos, $this->$matcher(array_merge($stack, array($result))) ) );
    		if ($subres !== FALSE) {
    			$this->store( $result, $subres );
    		}
    		else { $_251 = FALSE; break; }
    		if (( $subres = $this->literal( '/>' ) ) !== FALSE) { $result["text"] .= $subres; }
    		else { $_251 = FALSE; break; }
    		$_251 = TRUE; break;
    	}
    	while(0);
    	if( $_251 === TRUE ) { return $this->finalise($result); }
    	if( $_251 === FALSE) { return FALSE; }
    }



    function Component__construct(&$res)
    {
        $res['arguments'] = array();
    }

    function Component_ComposedNamedArgument(&$res, $sub)
    {
        $res['arguments'][] = $sub['php'];
    }

    function Component__finalise(&$res)
    {
        $res['php'] .= Injector::inst()->get('Symbiote\\Components\\ComponentService')->generateTemplateCode($res, $this);
    }

    /* Text: (
        / [^<${\\]+ / |
        / (\\.) / |
        '<' !/ % | : | \/: / |
        '$' !(/[A-Za-z_]/) |
        '{' !'$' |
        '{$' !(/[A-Za-z_]/)
    )+ */
    protected $match_Text_typestack = array('Text');
    function match_Text ($stack = array()) {
    	$matchrule = "Text"; $result = $this->construct($matchrule, $matchrule, null);
    	$count = 0;
    	while (true) {
    		$res_291 = $result;
    		$pos_291 = $this->pos;
    		$_290 = NULL;
    		do {
    			$_288 = NULL;
    			do {
    				$res_253 = $result;
    				$pos_253 = $this->pos;
    				if (( $subres = $this->rx( '/ [^<${\\\\]+ /' ) ) !== FALSE) {
    					$result["text"] .= $subres;
    					$_288 = TRUE; break;
    				}
    				$result = $res_253;
    				$this->pos = $pos_253;
    				$_286 = NULL;
    				do {
    					$res_255 = $result;
    					$pos_255 = $this->pos;
    					if (( $subres = $this->rx( '/ (\\\\.) /' ) ) !== FALSE) {
    						$result["text"] .= $subres;
    						$_286 = TRUE; break;
    					}
    					$result = $res_255;
    					$this->pos = $pos_255;
    					$_284 = NULL;
    					do {
    						$res_257 = $result;
    						$pos_257 = $this->pos;
    						$_260 = NULL;
    						do {
    							if (substr($this->string,$this->pos,1) == '<') {
    								$this->pos += 1;
    								$result["text"] .= '<';
    							}
    							else { $_260 = FALSE; break; }
    							$res_259 = $result;
    							$pos_259 = $this->pos;
    							if (( $subres = $this->rx( '/ % | : | \/: /' ) ) !== FALSE) {
    								$result["text"] .= $subres;
    								$result = $res_259;
    								$this->pos = $pos_259;
    								$_260 = FALSE; break;
    							}
    							else {
    								$result = $res_259;
    								$this->pos = $pos_259;
    							}
    							$_260 = TRUE; break;
    						}
    						while(0);
    						if( $_260 === TRUE ) { $_284 = TRUE; break; }
    						$result = $res_257;
    						$this->pos = $pos_257;
    						$_282 = NULL;
    						do {
    							$res_262 = $result;
    							$pos_262 = $this->pos;
    							$_267 = NULL;
    							do {
    								if (substr($this->string,$this->pos,1) == '$') {
    									$this->pos += 1;
    									$result["text"] .= '$';
    								}
    								else { $_267 = FALSE; break; }
    								$res_266 = $result;
    								$pos_266 = $this->pos;
    								$_265 = NULL;
    								do {
    									if (( $subres = $this->rx( '/[A-Za-z_]/' ) ) !== FALSE) {
    										$result["text"] .= $subres;
    									}
    									else { $_265 = FALSE; break; }
    									$_265 = TRUE; break;
    								}
    								while(0);
    								if( $_265 === TRUE ) {
    									$result = $res_266;
    									$this->pos = $pos_266;
    									$_267 = FALSE; break;
    								}
    								if( $_265 === FALSE) {
    									$result = $res_266;
    									$this->pos = $pos_266;
    								}
    								$_267 = TRUE; break;
    							}
    							while(0);
    							if( $_267 === TRUE ) { $_282 = TRUE; break; }
    							$result = $res_262;
    							$this->pos = $pos_262;
    							$_280 = NULL;
    							do {
    								$res_269 = $result;
    								$pos_269 = $this->pos;
    								$_272 = NULL;
    								do {
    									if (substr($this->string,$this->pos,1) == '{') {
    										$this->pos += 1;
    										$result["text"] .= '{';
    									}
    									else { $_272 = FALSE; break; }
    									$res_271 = $result;
    									$pos_271 = $this->pos;
    									if (substr($this->string,$this->pos,1) == '$') {
    										$this->pos += 1;
    										$result["text"] .= '$';
    										$result = $res_271;
    										$this->pos = $pos_271;
    										$_272 = FALSE; break;
    									}
    									else {
    										$result = $res_271;
    										$this->pos = $pos_271;
    									}
    									$_272 = TRUE; break;
    								}
    								while(0);
    								if( $_272 === TRUE ) { $_280 = TRUE; break; }
    								$result = $res_269;
    								$this->pos = $pos_269;
    								$_278 = NULL;
    								do {
    									if (( $subres = $this->literal( '{$' ) ) !== FALSE) {
    										$result["text"] .= $subres;
    									}
    									else { $_278 = FALSE; break; }
    									$res_277 = $result;
    									$pos_277 = $this->pos;
    									$_276 = NULL;
    									do {
    										if (( $subres = $this->rx( '/[A-Za-z_]/' ) ) !== FALSE) {
    											$result["text"] .= $subres;
    										}
    										else { $_276 = FALSE; break; }
    										$_276 = TRUE; break;
    									}
    									while(0);
    									if( $_276 === TRUE ) {
    										$result = $res_277;
    										$this->pos = $pos_277;
    										$_278 = FALSE; break;
    									}
    									if( $_276 === FALSE) {
    										$result = $res_277;
    										$this->pos = $pos_277;
    									}
    									$_278 = TRUE; break;
    								}
    								while(0);
    								if( $_278 === TRUE ) { $_280 = TRUE; break; }
    								$result = $res_269;
    								$this->pos = $pos_269;
    								$_280 = FALSE; break;
    							}
    							while(0);
    							if( $_280 === TRUE ) { $_282 = TRUE; break; }
    							$result = $res_262;
    							$this->pos = $pos_262;
    							$_282 = FALSE; break;
    						}
    						while(0);
    						if( $_282 === TRUE ) { $_284 = TRUE; break; }
    						$result = $res_257;
    						$this->pos = $pos_257;
    						$_284 = FALSE; break;
    					}
    					while(0);
    					if( $_284 === TRUE ) { $_286 = TRUE; break; }
    					$result = $res_255;
    					$this->pos = $pos_255;
    					$_286 = FALSE; break;
    				}
    				while(0);
    				if( $_286 === TRUE ) { $_288 = TRUE; break; }
    				$result = $res_253;
    				$this->pos = $pos_253;
    				$_288 = FALSE; break;
    			}
    			while(0);
    			if( $_288 === FALSE) { $_290 = FALSE; break; }
    			$_290 = TRUE; break;
    		}
    		while(0);
    		if( $_290 === FALSE) {
    			$result = $res_291;
    			$this->pos = $pos_291;
    			unset( $res_291 );
    			unset( $pos_291 );
    			break;
    		}
    		$count += 1;
    	}
    	if ($count > 0) { return $this->finalise($result); }
    	else { return FALSE; }
    }



}
