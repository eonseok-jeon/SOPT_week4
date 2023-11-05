import { useState } from 'react';
import FirstChoice from './FirstChoice';
import SecondChoice from './SecondChoice';
import LastChoice from './LastChoice';

const PersonalArticle = ({ selectOptionHandler, startPickHandler }) => {
  const [nthChoice, setNthChoice] = useState(1);

  return (
    <>
      {nthChoice === 1 && (
        <FirstChoice
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
      {nthChoice === 2 && (
        <SecondChoice
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
      {nthChoice === 3 && (
        <LastChoice
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
    </>
  );
};

export default PersonalArticle;
