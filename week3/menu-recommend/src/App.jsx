import GlobalStyle from '@styles/GlobalStyle';
import Header from '@components/Header';
import MainSection from '@components/MainSection';
import { useState } from 'react';

export default function App() {
  const [selectOption, setSelectOption] = useState('');

  return (
    <>
      <GlobalStyle />
      <Header
        selectOption={selectOption}
        selectOptionHandler={(selected) => {
          setSelectOption(selected);
        }}
      />
      <MainSection
        selectOption={selectOption}
        selectOptionHandler={(selected) => {
          setSelectOption(selected);
        }}
      />
    </>
  );
}
