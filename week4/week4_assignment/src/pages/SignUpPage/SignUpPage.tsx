import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <Form>
        <Label>이름</Label>
        <Input type="text" placeholder="사용자 이름을 입력해주세요" />
        <NextButton disabled>다음</NextButton>
      </Form>
      <LoginLink>
        이미 회원이신가요? <StyledLink to="/login">로그인</StyledLink>
      </LoginLink>
    </SignUpContainer>
  );
};

export default SignUpPage;

const SignUpContainer = styled.div`
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1rem;
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

const NextButton = styled.button`
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

const LoginLink = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray3};
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
  text-decoration: underline;
`;
