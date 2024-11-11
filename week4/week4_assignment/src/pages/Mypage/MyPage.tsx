import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InfoSection from "../../components/MyPage/InfoSection";
import HobbySection from "../../components/MyPage/HobbySection";
import Header from "../../components/MyPage/Header";

interface UpdateData {
  hobby?: string;
  password?: string;
}

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("hobby");
  const [hobby, setHobby] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  const [otherUserHobby, setOtherUserHobby] = useState<string | null>(null);
  const [searchedUserId, setSearchedUserId] = useState<string | null>(null);
  const [newHobby, setNewHobby] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
        setSearchedUserId(userId);
      } else {
        alert("해당 사용자의 취미 정보를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Failed to fetch other user's hobby:", error);
      alert("취미 정보를 가져오는 데 실패했습니다.");
    }
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (!newHobby && !newPassword) {
      alert("변경할 비밀번호 또는 취미를 입력해주세요.");
      return;
    }

    const updateData: UpdateData = {};
    if (newHobby) updateData.hobby = newHobby;
    if (newPassword) updateData.password = newPassword;

    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/user`, updateData, {
        headers: {
          token: token,
        },
      });

      alert("정보가 성공적으로 업데이트되었습니다.");
      setHobby(newHobby || hobby);
      setNewHobby("");
      setNewPassword("");
    } catch (error) {
      console.error("Failed to update information:", error);
      alert("정보를 업데이트하는 데 실패했습니다.");
    }
  };

  return (
    <MyPageContainer>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
      <Content>
        {activeTab === "hobby" ? (
          <HobbySection
            hobby={hobby}
            userId={userId}
            otherUserHobby={otherUserHobby}
            searchedUserId={searchedUserId}
            setUserId={setUserId}
            handleSearch={handleSearch}
          />
        ) : (
          <InfoSection
            newHobby={newHobby}
            newPassword={newPassword}
            setNewHobby={setNewHobby}
            setNewPassword={setNewPassword}
            handleUpdate={handleUpdate}
          />
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

const Content = styled.div`
  width: 30%;
  max-width: 80rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
