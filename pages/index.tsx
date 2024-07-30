import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="user/home">Go to User Home</Link>
    </>
  );
};

export default Home;
