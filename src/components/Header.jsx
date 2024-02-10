import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, toggleTheme } from "../slices/themeSlice";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DropdownButton from "./DropdownButton";
import { getUser, login, logout } from "../slices/userSlice";

function Header() {
  const darkMode = useSelector(getTheme);
  const { isLoggedIn, username } = useSelector(getUser);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const handleMenuClick = (value) => {
    console.log(value);
  };
  const handleLogin = () => {
    dispatch(login());
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  console.log(darkMode);
  return (
    <header className=" bg-white dark:bg-gray-800 flex px-10 justify-between py-4 items-center">
      <div className=" flex gap-x-3">
        <div className=" dark:text-white text-gray-800">My Logo</div>
        <nav className="  ">
          <ul className=" flex gap-x-3">
            <li className=" dark:text-white text-gray-800 whitespace-nowrap">
              <a href="/home">Trang chủ</a>
            </li>
            <li className=" dark:text-white text-gray-800 whitespace-nowrap">
              <a href="/tin-tuc">Tin tức</a>
            </li>
            <li className=" dark:text-white text-gray-800 whitespace-nowrap">
              <a href="/">Dịch vụ</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" flex">
        <button onClick={() => handleToggleTheme()}>
          {darkMode ? (
            <DarkModeIcon sx={{ color: "white", fontSize: 25 }} />
          ) : (
            <LightModeIcon sx={{ color: "black", fontSize: 25 }} />
          )}
        </button>
        <div className=" flex gap-x-3 justify-between ">
          {isLoggedIn ? (
            <DropdownButton onMenuClick={handleMenuClick} />
          ) : (
            <>
              <button
                className=" dark:text-white text-gray-800"
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
              <button className=" dark:text-white text-gray-800">
                Đăng ký
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
