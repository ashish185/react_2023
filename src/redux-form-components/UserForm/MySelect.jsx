import React from 'react'
import ReactSelect from 'react-select';

const MySelect = (props) => {
  // console.log("props", props);
  const { input, ...rest } = props;
  const { value, onChange } = input;
  const myChange= (option) => {
    console.log('option in my change', option);
    return option;
  };
  console.log(rest);
  return (
    <div>
      <ReactSelect
        value={value}
        onChange={myChange}
        options={rest.options}
        aria-label="my-gender"
        {...rest}
      />
    </div>
  );
};

export default MySelect