import ReactDOM from "react-dom";
import styled from "styled-components";

const CompleteModal = ({ children }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Modal>{children}</Modal>
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
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.orange3};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 50rem;
  height: auto;
`;
