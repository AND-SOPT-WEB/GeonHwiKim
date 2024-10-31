import HomeHeader from "../components/Home/HomeHeader";
import styled from "styled-components";

export const Home = () => {
  return (
    <HomePageWrapper>
      <HomeHeader />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.orange2};
`;
