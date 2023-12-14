import { useReducer } from 'react';
import FirstChoice from './FirstChoice';
import SecondChoice from './SecondChoice';
import LastChoice from './LastChoice';
import * as S from './style';

const DUMMY_DATA = [
  '맨밥',
  '소고기국',
  '비빔면',
  '칼국수',
  '수육',
  '돼지국밥',
  '초밥',
  '미소된장국',
  '야끼소바',
  '라멘',
  '규카츠',
  '나베',
  '볶음밥',
  '중국식 계란국',
  '볶음면',
  '짬뽕',
  '동파육',
  '고기 들어간 팔보채',
];

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

  const index =
    (menuState.firstChoice - 1) * 6 +
    (menuState.secondChoice - 1) * 2 +
    (menuState.thirdChoice - 1);

  const imgUrl = new URL(
    `../../../assets/${menuState.firstChoice}-${menuState.secondChoice}-${menuState.thirdChoice}.jpg`,
    import.meta.url
  ).href;

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
      {menuState.nthChoice === 4 && (
        <>
          <p>오늘의 추천음식은 바로!!</p>
          <img src={imgUrl} />
          <p>{DUMMY_DATA[index]}</p>
          <S.StartButton
            onClick={() => {
              startPickHandler(false);
            }}
          >
            다시하기
          </S.StartButton>
        </>
      )}
    </>
  );
};

export default PersonalArticle;
