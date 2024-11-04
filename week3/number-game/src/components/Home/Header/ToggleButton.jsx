import styled from "styled-components";

const ToggleButton = ({ selected, onClick, children }) => {
  return (
    <StyledToggleButton selected={selected} onClick={onClick}>
      {children}
    </StyledToggleButton>
  );
};

export default ToggleButton;

const StyledToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 5rem;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.orange3 : "transparent"};
  border: none;
  padding: 1rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 3rem;
  font-weight: 500;

  &:hover {
    background: ${({ selected, theme }) =>
      selected ? theme.colors.orange3 : theme.colors.orange4};
  }
`;
