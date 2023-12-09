import { Button } from "@mui/material";
import React from "react";
import LogoutButton from "./LogoutButton";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { AssessmentOutlined, CampaignOutlined, OndemandVideoOutlined, TourOutlined } from "@mui/icons-material";
import { PiDotsNineBold } from "react-icons/pi";
import { RiMessengerFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

const iconStyle = ` flex py-3 w-[116px] justify-center hover:bg-slate-100 hover:rounded-lg ` ;

function Dashboard({ onClick }) {
    // console.log("Received onClick:", onClick);
  return (
    <div>
      <nav className="h-16 shadow-xl flex flex-row w-[1524px] items-center justify-between">
        <div className="flex ">
        <img className="ml-4 h-10" src="https://i.postimg.cc/T1DSXGfP/download.png" alt="" />
        <div className="flex justify-center items-center rounded-3xl bg-[#f0f2f5] ml-2 w-[227px]">
            <SearchIcon className="text-slate-500 m-2"/>
        <input className="bg-[#f0f2f5]" type="text" placeholder="Search Facebook"/>
        </div>
        </div>
        <div className="flex">
            <ul className="flex">
                <li className="flex py-3 w-[116px] justify-center hover:bg-slate-100 hover:rounded-lg border-b-4 border-[#1877F2]"  ><HomeIcon  fontSize="large" style={{ color: '#1877F2' }}/></li>
                <li className={iconStyle}><TourOutlined fontSize="large" style={{color: 'slategray'}} /></li>
                <li className={iconStyle}><AssessmentOutlined fontSize="large" style={{color: 'slategray'}}/></li>
                <li className={iconStyle}><CampaignOutlined fontSize="large" style={{color: 'slategray'}} /></li>
                <li className={iconStyle}><OndemandVideoOutlined fontSize="large" style={{color: 'slategray'}} /></li>
            </ul>
            
        </div>
        <div className="flex justify-center items-center">
                <div className="h-10 w-10 rounded-3xl bg-[#E4EBE6] flex justify-center items-center mr-2 "><PiDotsNineBold style={{fontSize:"30px"}}/></div>
                <div className="h-10 w-10 rounded-3xl bg-[#E4EBE6] flex justify-center items-center mr-2"><RiMessengerFill style={{fontSize:"25px"}}/></div>
                <div className="h-10 w-10 rounded-3xl bg-[#E4EBE6] flex justify-center items-center mr-2"><IoNotifications style={{fontSize:"25px"}}/></div>
              
      <LogoutButton className="absolute"/>
            </div>
      </nav>
      <h1 className="text-3xl mt-[100px]">Click to logout to logout </h1>
    </div>
  );
}

export default Dashboard;
