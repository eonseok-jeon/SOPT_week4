import { useState } from 'react';

const useSelect = () => {
  const [clickedOption, setClickedOption] = useState(0);

  const clickedOptionHandler = (number) => {
    setClickedOption(number);
  };

  return { clickedOption, clickedOptionHandler };
};

export default useSelect;
