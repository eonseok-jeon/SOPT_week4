import GlobalStyle from '@styles/GlobalStyle';
import Header from '@components/Header';
import MainSection from '@components/MainSection';
import { useState } from 'react';

export default function App() {
  const [selectOption, setSelectOption] = useState('');
  const [startPick, setStartPick] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header
        selectOption={selectOption}
        selectOptionHandler={(selected) => {
          setSelectOption(selected);
        }}
        startPickHandler={(isStart) => {
          setStartPick(isStart);
        }}
      />
      <MainSection
        selectOption={selectOption}
        startPick={startPick}
        selectOptionHandler={(selected) => {
          setSelectOption(selected);
        }}
        startPickHandler={(isStart) => {
          setStartPick(isStart);
        }}
      />
    </>
  );
}
