import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SignUpResponse } from "../../types/SignUpResponse";

interface HobbyStepProps {
  hobby: string;
  setHobby: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => Promise<SignUpResponse>;
}

const HobbyStep: React.FC<HobbyStepProps> = ({ hobby, setHobby, onNext }) => {
  const [hobbyError, setHobbyError] = useState("");
  const navigate = useNavigate();

  const handleHobbyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHobby(value);

    if (value.length > 8) {
      setHobbyError("취미는 8글자 이하로 입력해주세요");
    } else {
      setHobbyError("");
    }
  };

  const handleSignUpClick = async () => {
    if (!hobbyError) {
      try {
        const data = await onNext();
        console.log(data);
        alert(`회원가입 성공! 회원번호: ${data.result.no}`);
        navigate("/login");
      } catch (error) {
        console.error("Sign-up error:", error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <>
      <Label>취미</Label>
      <Input
        type="text"
        placeholder="취미를 입력해주세요"
        value={hobby}
        onChange={handleHobbyChange}
      />
      {hobbyError && <ErrorMessage>{hobbyError}</ErrorMessage>}
      <NextButton
        disabled={!hobby || hobby.length > 8}
        onClick={handleSignUpClick}
      >
        회원가입
      </NextButton>
    </>
  );
};

export default HobbyStep;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  padding-right: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  outline: none;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.orange1};
  font-size: 1rem;
  margin-left: 1rem;
`;

const NextButton = styled.button`
  width: 30rem;
  height: 4.5rem;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray3 : theme.colors.gray2};
  color: ${({ theme }) => theme.colors.white1};
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease;
  &:hover {
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray3 : theme.colors.gray1};
  }
`;
