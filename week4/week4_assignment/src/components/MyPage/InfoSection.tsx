import React from "react";
import styled from "styled-components";

interface InfoSectionProps {
  newHobby: string;
  newPassword: string;
  setNewHobby: React.Dispatch<React.SetStateAction<string>>;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  handleUpdate: () => void;
}

const InfoSection = ({
  newHobby,
  newPassword,
  setNewHobby,
  setNewPassword,
  handleUpdate,
}: InfoSectionProps) => {
  return (
    <SectionContainer>
      <SectionTitle>내 정보 수정하기</SectionTitle>
      <Form>
        <Label>새 비밀번호</Label>
        <Input
          type="password"
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Label>새 취미</Label>
        <Input
          type="text"
          placeholder="새 취미"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
        />
        <SubmitButton onClick={handleUpdate}>수정하기</SubmitButton>
      </Form>
    </SectionContainer>
  );
};

export default InfoSection;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 0.5px;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white1};
  background-color: #333;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;
