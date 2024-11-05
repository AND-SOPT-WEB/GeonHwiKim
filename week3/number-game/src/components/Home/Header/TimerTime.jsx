import styled from "styled-components";

const TimerTime = ({ time }) => {
  return <TimerTimeContainer>{time}</TimerTimeContainer>;
};

export default TimerTime;

const TimerTimeContainer = styled.p`
  font-size: 3rem;
`;
