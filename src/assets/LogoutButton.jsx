import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    console.log("Navigating to /");
  };

  return <button className="my-3 p-2 h-full bg-[#1877F2] rounded-md  shadow-sm outline-none font-medium text-lg text-white" onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
