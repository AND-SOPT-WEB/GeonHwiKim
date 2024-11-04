import ReactDOM from "react-dom";
import styled from "styled-components";

const CompleteModal = ({ onClose, finalTime }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Modal>
        <Message>게임 기록: {finalTime}</Message>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </Modal>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

export default CompleteModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10rem;
  background-color: ${({ theme }) => theme.colors.orange3};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 50rem;
  height: 30rem;
`;

const Message = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.black1};
  color: ${({ theme }) => theme.colors.white1};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;
