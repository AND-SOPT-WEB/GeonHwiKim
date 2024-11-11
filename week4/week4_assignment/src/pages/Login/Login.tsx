import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        {
          username,
          password,
        }
      );

      if (response.data.result?.token) {
        const token = response.data.result.token;
        localStorage.setItem("authToken", token);
        alert(`로그인 성공! 토큰: ${token}`);
        navigate("/mypage");
      } else {
        setError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <SignupLink to="/signup">회원가입</SignupLink>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const Input = styled.input`
  width: 30rem;
  height: 4rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 0.5rem;
  font-size: 2rem;
  outline: none;
`;

const LoginButton = styled.button`
  width: 30rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.white1};
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.gray1};
  }
`;

const SignupLink = styled(Link)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray3};
  cursor: pointer;
  text-decoration: underline;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.orange1};
  font-size: 1.5rem;
  margin-top: 1rem;
`;
