import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useFunnel from "../../hooks/useFunnel";
import NameStep from "../../components/SignUpPage/NameStep";
import PasswordStep from "../../components/SignUpPage/PasswordStep";
import HobbyStep from "../../components/SignUpPage/HobbyStep";
import { SignUpResponse } from "../../types/SignUpResponse";

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const funnel = useFunnel(["name", "password", "hobby"]);

  const onSubmit = async (): Promise<SignUpResponse> => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      throw new Error("Passwords do not match");
    }

    try {
      const response = await axios.post<SignUpResponse>(
        `${import.meta.env.VITE_BASE_URL}/user`,
        {
          username: name,
          password: password,
          hobby: hobby,
        }
      );
      return response.data;
    } catch (error) {
      console.error("There was an error creating the user:", error);
      throw error;
    }
  };

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
          <HobbyStep hobby={hobby} setHobby={setHobby} onNext={onSubmit} />
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
