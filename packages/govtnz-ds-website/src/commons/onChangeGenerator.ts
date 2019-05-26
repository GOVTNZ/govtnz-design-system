import { useState } from 'react';

type OnChange = {
  value?: string | number | undefined;
  onChange?: Function | undefined;
};

type ComponentWithProps = any & { props: string[] };

export default (component: ComponentWithProps): OnChange => {
  // When a DS Component has a value/onChange we handle basic state in the examples
  let obj: OnChange = {};
  if (
    component.props &&
    component.props.includes('value') &&
    component.props.includes('onChange')
  ) {
    // It would be difficult to know generic names for these pairs of props,
    // so although there could also be value2 and onChange2 we'll only support
    // the basic use-case of value and onChange to keep things simpler.
    const [value, setValue] = useState(''); // TODO: somehow get a default value from any 'value' prop
    obj.value = value;
    obj.onChange = e => {
      // console.info('Updating state to ', e.target.value);
      setValue(e.target.value);
    };
  }
  return obj;
};
