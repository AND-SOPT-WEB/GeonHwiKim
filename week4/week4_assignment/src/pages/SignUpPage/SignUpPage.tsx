import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordInputs, setShowPasswordInputs] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);

    if (value.length > 8) {
      setNameError("이름은 8글자 이하로 입력해주세요");
    } else {
      setNameError("");
    }
  };

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

  const handleNextClick = () => {
    setShowPasswordInputs(true);
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
    <SignUpContainer>
      <Title>회원가입</Title>
      <Form>
        {!showPasswordInputs ? (
          <>
            <Label>이름</Label>
            <Input
              type="text"
              placeholder="사용자 이름을 입력해주세요"
              value={name}
              onChange={handleInputChange}
            />
            {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
            <NextButton
              disabled={!name || name.length > 8}
              onClick={handleNextClick}
            >
              다음
            </NextButton>
          </>
        ) : (
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
            <NextButton disabled={isNextButtonDisabled}>다음</NextButton>
          </>
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
  top: 20%;
  right: 2.5rem;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
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
