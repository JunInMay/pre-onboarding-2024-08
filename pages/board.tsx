import { FC } from 'react';

const Board: FC = () => {
  console.log('hi!');
  return (
    <>
      <h1>my board!</h1>
      <h2>yes!</h2>
      <button
        onClick={() => {
          alert('yaho');
        }}
      >
        <a href="/">버튼</a>
      </button>
    </>
  );
};

export default Board;
