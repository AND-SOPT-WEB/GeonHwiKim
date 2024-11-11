import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("hobby");
  const [hobby, setHobby] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  const [otherUserHobby, setOtherUserHobby] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHobby = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/my-hobby`,
          {
            headers: {
              token: token,
            },
          }
        );

        if (response.data.result?.hobby) {
          setHobby(response.data.result.hobby);
        } else {
          alert("취미 정보를 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("Failed to fetch hobby:", error);
        alert("취미 정보를 가져오는 데 실패했습니다.");
      }
    };

    fetchHobby();
  }, [navigate]);

  const handleSearch = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/${userId}/hobby`,
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.data.result?.hobby) {
        setOtherUserHobby(response.data.result.hobby);
      } else {
        alert("해당 사용자의 취미 정보를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Failed to fetch other user's hobby:", error);
      alert("취미 정보를 가져오는 데 실패했습니다.");
    }
  };

  return (
    <MyPageContainer>
      <Header>
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
        <LogoutButton
          onClick={() => {
            localStorage.removeItem("authToken");
            navigate("/login");
          }}
        >
          로그아웃
        </LogoutButton>
      </Header>
      <Content>
        {activeTab === "hobby" ? (
          <HobbySection>
            <SectionTitle>취미</SectionTitle>
            <MyHobbyContainer>
              <SubTitle>나의 취미</SubTitle>
              <HobbyText>{hobby}</HobbyText>
            </MyHobbyContainer>
            <OtherHobbiesContainer>
              <SubTitle>다른 사람들의 취미</SubTitle>
              <SearchInput
                placeholder="사용자 번호"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <SearchButton onClick={handleSearch}>검색</SearchButton>
              {otherUserHobby && (
                <OtherHobbyText>
                  {userId}번 사용자의 취미: {otherUserHobby}
                </OtherHobbyText>
              )}
            </OtherHobbiesContainer>
          </HobbySection>
        ) : (
          <InfoSection>
            <SectionTitle>내 정보 수정하기</SectionTitle>
            <Form>
              <Label>새 비밀번호</Label>
              <Input type="password" placeholder="새 비밀번호" />
              <Label>새 취미</Label>
              <Input type="text" placeholder="새 취미" />
              <SubmitButton>수정하기</SubmitButton>
            </Form>
          </InfoSection>
        )}
      </Content>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
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

const Content = styled.div`
  width: 30%;
  max-width: 80rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
  text-align: center;
`;

const HobbySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MyHobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
`;

const HobbyText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray2};
`;

const OtherHobbiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 0.5px;
  outline: none;
`;

const SearchButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white1};
  background-color: ${({ theme }) => theme.colors.gray1};
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const OtherHobbyText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: 1rem;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 0.5px;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white1};
  background-color: #333;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;
