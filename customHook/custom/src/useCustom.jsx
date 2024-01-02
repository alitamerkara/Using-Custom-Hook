import { useState } from "react";

const useCustom = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const info = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  const reset = () => {
    setValue("");
  };
  return [value, info, reset];
};

export default useCustom;
