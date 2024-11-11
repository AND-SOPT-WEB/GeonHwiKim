import React from "react";
import styled from "styled-components";

interface HobbySectionProps {
  hobby: string | null;
  userId: string;
  otherUserHobby: string | null;
  searchedUserId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const HobbySection = ({
  hobby,
  userId,
  otherUserHobby,
  searchedUserId,
  setUserId,
  handleSearch,
}: HobbySectionProps) => {
  return (
    <SectionContainer>
      <SectionTitle>취미</SectionTitle>
      <MyHobbyContainer>
        <SubTitle>나의 취미</SubTitle>
        <HobbyText>{hobby}</HobbyText>
      </MyHobbyContainer>
      <OtherHobbiesContainer>
        <SubTitle>다른 사람들의 취미</SubTitle>
        <SearchInput
          placeholder="사용자 번호"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
        {searchedUserId && otherUserHobby && (
          <OtherHobbyText>
            {searchedUserId}번 사용자의 취미: {otherUserHobby}
          </OtherHobbyText>
        )}
      </OtherHobbiesContainer>
    </SectionContainer>
  );
};

export default HobbySection;

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

const MyHobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
`;

const HobbyText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray2};
`;

const OtherHobbiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 0.5px;
  outline: none;
`;

const SearchButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white1};
  background-color: ${({ theme }) => theme.colors.gray1};
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const OtherHobbyText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: 1rem;
`;
