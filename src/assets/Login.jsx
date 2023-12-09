import React, { useState } from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const inputStyle =
  " block w-full p-3 bg-white border border-slate-300 rounded-md  shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 

  function login(e) {
    e.preventDefault();

    var users = JSON.parse(localStorage.getItem("users"));

    var i = 0;
    for (var user of users) {
      if (user.email == email && user.password == password) {
        i++;
      }
    }
    if (i == 1) {
      alert("Login Successful");
      localStorage.setItem("isLoggedIn", "isLoggedIn");
      navigate("/dashboard");
      window.location.reload(true);
    } else {
      alert("Invalid Login");
    }
  }

  return (
    <>
      {localStorage.getItem("isLoggedIn") ? (
        <LogoutButton />
      ) : (
        <div className="flex w-full h-full bg-[#f0f4f5] py-[10%] ">
          <div className=" flex w-[80%] h-full m-auto justify-between">
            <div className="flex flex-col items-start pt-12 w-2/5">
              <img
                className="h-16 object-contain fill-current mt-11"
                src="https://i.postimg.cc/rwWHHqgZ/facebook-Logo.png"
                alt="facebook logo"
              />

              <h2 className="text-2xl px-4">
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
            <form className="flex w-3/6 h-96">
              <div className="flex flex-col w-[65%] p-6 rounded-lg bg-white shadow-md items-center">
                <input
                  className={inputStyle}
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
                <br />
                <input
                  className={inputStyle}
                  type="password"
                  required
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="my-4 w-full p-3 bg-[#1877F2] rounded-md  shadow-sm outline-none font-bold text-xl text-white"
                  onClick={login}
                >
                  Log in
                </button>

                <p className="text-[#1877F2] mb-6">Forgotten password?</p>
                <div className="flex items-center border-b-2 border-gray-300 mx-4 my-5 text-center w-full"></div>

                <MyButton />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
