import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import axios from 'axios';

const SignUp: FC = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userId || !email || !password) {
      setError('모든 필드를 입력해야 합니다.');
      return;
    }

    try {
      await axios.post('/api/user/signup', {
        userId,
        email,
        password,
      });

      router.push('/'); // 성공적으로 가입 후 홈 페이지로 리디렉션
    } catch (error) {
      console.log(error.code);
      setError('회원가입에 실패했습니다.');
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">아이디</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
