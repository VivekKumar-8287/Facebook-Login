import { Button } from "@mui/material";
import { useState } from "react";


const inputStyle = " block w-full p-3 bg-white border border-slate-300 rounded-md  shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";

const Form = ({ handleClose }) => {
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
    var users = JSON.parse(localStorage.getItem('users')||"[]")
    console.log(users);
   
    var newuser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    users.push(newuser)

    localStorage.setItem('users',JSON.stringify(users))
    
    if (!Array.isArray(users)) {
      console.error('Invalid users data in localStorage:', newUser);
    }else{
      alert('User Added Successfully')
    }


    handleClose();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-8 w-[380px]">
      <input className={inputStyle}
        type="text"
        placeholder="Name"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
      className={inputStyle}
        type="text"
        required
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <input className={inputStyle}
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input className={inputStyle}
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <div className="m-4">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-md" variant="contained" onClick={handleClose}>Cancel</Button><span className="mx-6"></span>
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit" variant="contained" color="primary">
        SignUp
      </Button>
      </div>
    </form>
  );
}

export default Form;
