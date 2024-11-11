import React, { useState } from "react";
import styled from "styled-components";

interface PasswordStepProps {
  password: string;
  confirmPassword: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
}

const PasswordStep: React.FC<PasswordStepProps> = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  onNext,
}) => {
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);

    if (value.length > 8) {
      setPasswordError("비밀번호는 8글자 이하로 입력해주세요");
    } else if (confirmPassword && value !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setConfirmPassword(value);

    if (value.length > 8) {
      setPasswordError("비밀번호는 8글자 이하로 입력해주세요");
    } else if (password && value !== password) {
      setPasswordError("비밀번호가 일치하지 않습니다");
    } else {
      setPasswordError("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isNextButtonDisabled =
    !password ||
    !confirmPassword ||
    password !== confirmPassword ||
    password.length > 8;

  return (
    <>
      <Label>비밀번호</Label>
      <PasswordContainer>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <ShowPasswordButton onClick={toggleShowPassword}>
          {showPassword ? "🙈" : "👁️"}
        </ShowPasswordButton>
      </PasswordContainer>
      <Label>비밀번호 확인</Label>
      <PasswordContainer>
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </PasswordContainer>
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      <NextButton disabled={isNextButtonDisabled} onClick={onNext}>
        다음
      </NextButton>
    </>
  );
};

export default PasswordStep;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1rem;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 30rem;
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

const ShowPasswordButton = styled.button`
  position: absolute;
  top: 25%;
  right: 2.5rem;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
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
