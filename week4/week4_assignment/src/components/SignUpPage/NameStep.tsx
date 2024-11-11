import React, { useState } from "react";
import styled from "styled-components";

interface NameStepProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
}

const NameStep = ({ name, setName, onNext }: NameStepProps) => {
  const [nameError, setNameError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);

    if (value.length > 8) {
      setNameError("이름은 8글자 이하로 입력해주세요");
    } else {
      setNameError("");
    }
  };

  return (
    <>
      <Label>이름</Label>
      <Input
        type="text"
        placeholder="사용자 이름을 입력해주세요"
        value={name}
        onChange={handleInputChange}
      />
      {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
      <NextButton disabled={!name || name.length > 8} onClick={onNext}>
        다음
      </NextButton>
    </>
  );
};

export default NameStep;

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
