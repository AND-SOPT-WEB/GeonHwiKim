import styled from "styled-components";

const SelecteLevel = ({ level, onLevelChange }) => {
  return (
    <SelecteLevelContainer>
      <select value={level} onChange={(e) => onLevelChange(e.target.value)}>
        <option value="level1">level1</option>
        <option value="level2">level2</option>
        <option value="level3">level3</option>
      </select>
    </SelecteLevelContainer>
  );
};

export default SelecteLevel;

const SelecteLevelContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 500;

  select {
    padding: 0.5rem;
    font-size: 3rem;
    font-weight: 500;
    border-radius: 20px;
    border: none;
  }
`;
