import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Link
        href={'signin'}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          textAlign: 'center',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        로그인
      </Link>
      <Link
        href={'signup'}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          textAlign: 'center',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        회원 가입
      </Link>
    </>
  );
};

export default Home;
