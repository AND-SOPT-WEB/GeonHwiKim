import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MyPage from "./pages/Mypage/MyPage";
import Roots from "./Roots";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);
