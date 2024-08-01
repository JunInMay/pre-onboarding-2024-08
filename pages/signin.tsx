import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import axios from 'axios';

const SignIn: FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // 로그인 처리 함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/user/signin', {
        userId,
        password,
      });
      console.log('야호~', response);

      if (response.status === 200) {
        // 로그인 성공 시 리다이렉트
        localStorage.setItem('accessToken', response.data.accessToken);
        router.push('/'); // 로그인 후 리다이렉트할 페이지로 변경
      }
    } catch (err) {
      setError('로그인에 실패했습니다. 사용자 ID와 비밀번호를 확인하세요.');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">아이디</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SignIn;
