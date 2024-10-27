import styled from "styled-components";

import CardContents from "./components/CardContents";

function App() {
  return (
    <>
      <Title>3주차 실습</Title>
      <CardContainer>
        <CardContents />
      </CardContainer>
    </>
  );
}

export default App;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 3rem;
`;

const Title = styled.h1`
  font-size: 10rem;
`;
