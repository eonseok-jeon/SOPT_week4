import { useReducer } from 'react';
import FirstChoice from './FirstChoice';
import SecondChoice from './SecondChoice';
import LastChoice from './LastChoice';

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'done': {
      return { ...state, nthChoice: action.value };
    }
    case 'first': {
      return { ...state, firstChoice: action.value };
    }
    case 'second': {
      return { ...state, secondChoice: action.value };
    }
    case 'third': {
      return { ...state, thirdChoice: action.value };
    }
    default:
      throw Error('Unknown action : ' + action.type);
  }
};

const PersonalArticle = ({ selectOptionHandler, startPickHandler }) => {
  const [menuState, dispatchMenu] = useReducer(menuReducer, {
    nthChoice: 1,
    firstChoice: 0,
    secondChoice: 0,
    thirdChoice: 0,
  });

  return (
    <>
      {menuState.nthChoice === 1 && (
        <FirstChoice
          firstChoice={menuState.firstChoice}
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          dispatchHandler={(type, value) => {
            dispatchMenu({ type, value });
          }}
        />
      )}
      {menuState.nthChoice === 2 && (
        <SecondChoice
          secondChoice={menuState.secondChoice}
          dispatchHandler={(type, value) => {
            dispatchMenu({ type, value });
          }}
        />
      )}
      {menuState.nthChoice === 3 && (
        <LastChoice
          thirdChoice={menuState.thirdChoice}
          dispatchHandler={(type, value) => {
            dispatchMenu({ type, value });
          }}
        />
      )}
    </>
  );
};

export default PersonalArticle;
