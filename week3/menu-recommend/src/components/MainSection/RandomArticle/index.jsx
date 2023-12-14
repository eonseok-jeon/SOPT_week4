import { useEffect, useState } from 'react';
import { DUMMY_DATA } from '../../../core/DUMMY_DATA';
import * as S from '../PersonalArticle/style';
import ResultArticle from '../ResultArticle';

const RandomArticle = ({ startPickHandler }) => {
  const [count, setCount] = useState(3);
  const randomNum = Math.floor(Math.random() * 18) + 1;
  const first = Math.floor((randomNum - 1) / 6) + 1;
  const second = Math.floor(((randomNum - 1) % 6) / 2) + 1;
  const third = ((randomNum - 1) % 2) + 1;

  const imgUrl = new URL(`../../../assets/${first}-${second}-${third}.jpg`, import.meta.url).href;

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount((prev) => (prev -= 1));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);
  return (
    <>
      {count !== 0 && <p>{count}</p>}
      {count === 0 && (
        <ResultArticle imgUrl={imgUrl} num={randomNum} startPickHandler={startPickHandler} />
      )}
    </>
  );
};

export default RandomArticle;
