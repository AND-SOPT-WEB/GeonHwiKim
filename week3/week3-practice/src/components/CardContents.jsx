import styled from "styled-components";
import { useState } from "react";
import { members } from "../constants/members";

const CardContents = () => {
  const [likes, setLikes] = useState(Array(members.length).fill(0));

  const handleClick = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <>
      {members.map((member, index) => (
        <CardWrapper key={member.id}>
          <Name>{member.name}</Name>
          <EnglishName>{member.englishName}</EnglishName>
          <GithubId>{member.github}</GithubId>

          <LikeBox>
            {likes[index]}
            <LikeBtn onClick={() => handleClick(index)}>Like</LikeBtn>
          </LikeBox>
        </CardWrapper>
      ))}
    </>
  );
};

export default CardContents;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: aliceblue;
  border: 1px solid black;
  border-radius: 10px;
  height: 20rem;
  width: 20%;
`;

const Name = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;
const EnglishName = styled.p``;
const GithubId = styled.p``;

const LikeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const LikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  background-color: skyblue;
  border: 1px solid;
  border-radius: 5px;
`;
