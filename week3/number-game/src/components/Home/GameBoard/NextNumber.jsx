import styled from "styled-components";

const NextNumber = ({ currentNumber }) => {
  return <NextNumberContainer>다음 숫자: {currentNumber}</NextNumberContainer>;
};

export default NextNumber;

const NextNumberContainer = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.black1};
`;
