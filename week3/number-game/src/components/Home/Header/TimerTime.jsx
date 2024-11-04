import styled from "styled-components";

const TimerTime = ({ time }) => {
  return <StyledTime>{time}</StyledTime>;
};

export default TimerTime;

const StyledTime = styled.p`
  font-size: 3rem;
`;
