import styled from "styled-components";

const ResetButton = ({ onClick, children }) => {
  return (
    <ResetButtonContainer onClick={onClick}>{children}</ResetButtonContainer>
  );
};

export default ResetButton;

const ResetButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.orange5};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.orange2};
  }
`;
