import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <HeaderRight>
        <Title>마이페이지</Title>
        <Nav>
          <NavItem
            active={activeTab === "hobby"}
            onClick={() => setActiveTab("hobby")}
          >
            취미
          </NavItem>
          <NavItem
            active={activeTab === "info"}
            onClick={() => setActiveTab("info")}
          >
            내 정보
          </NavItem>
        </Nav>
      </HeaderRight>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.bookmark_click};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white1};
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.span<{ active: boolean }>`
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ active }) => (active ? "white" : "#ddd")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

const LogoutButton = styled.button`
  display: flex;
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
`;
