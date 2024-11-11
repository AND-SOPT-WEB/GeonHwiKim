import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Input type="text" placeholder="아이디" />
      <Input type="password" placeholder="비밀번호" />
      <LoginButton>로그인</LoginButton>
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
  border-radius: 0.5px;
  font-size: 2rem;
  outline: none;
`;

const LoginButton = styled.button`
  width: 30rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.colors.gray2};
  color: white;
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
