import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Roots = () => {
  return (
    <OutletContainer>
      <Outlet />
    </OutletContainer>
  );
};

export default Roots;

const OutletContainer = styled.main`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme.colors.orange7};
`;
