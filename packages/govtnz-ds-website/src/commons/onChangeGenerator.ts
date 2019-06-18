import { useState } from 'react';

type OnChange = {
  value?: string | number | undefined;
  onChange?: Function | undefined;
};

type ComponentWithProps = any & { props: string[] };

export default (component: ComponentWithProps): OnChange => {
  // When a DS Component has a value/onChange we handle basic state in the examples
  let obj: OnChange = {};

  const [value, setValue] = useState(''); // TODO: somehow get a default value from any 'value' prop
  obj.value = value;
  obj.onChange = e => {
    // console.info('Updating state to ', e.target.value);
    setValue(e.target.value);
  };

  return obj;
};
