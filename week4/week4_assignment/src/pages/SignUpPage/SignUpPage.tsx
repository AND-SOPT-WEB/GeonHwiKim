import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useFunnel from "../../hooks/useFunnel";
import NameStep from "../../components/SignUpPage/NameStep";
import PasswordStep from "../../components/SignUpPage/PasswordStep";
import HobbyStep from "../../components/SignUpPage/HobbyStep";

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const funnel = useFunnel(["name", "password", "hobby"]);

  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <Form>
        {funnel.currentStep === "name" && (
          <NameStep name={name} setName={setName} onNext={funnel.next} />
        )}
        {funnel.currentStep === "password" && (
          <PasswordStep
            password={password}
            confirmPassword={confirmPassword}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            onNext={funnel.next}
          />
        )}
        {funnel.currentStep === "hobby" && (
          <HobbyStep hobby={hobby} setHobby={setHobby} />
        )}
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
