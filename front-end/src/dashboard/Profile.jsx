import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import profile from './generic_profile.png';
import { popEffect, responsive } from "./styles";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

function Profile({firstName="Firstname", lastName="Lastname", email="unknown@example.com", pronouns="they/them", PoSt="CS", discord="discord", facebook="facebook", whatsapp="whatsapp", phone_nr="phone number", instagram="instagram"}) {
  return (
    <div className="flex flex-row flex-grow gap-12 items-center justify-center bg-black/60 rounded-md transform transition-all duration-300 ease-in-out hover:scale-105 p-8 box-border overflow-scroll">
        <img className="h-[300px] w-[300px] rounded-full" src={profile} />
        <div className={`flex flex-col gap-2 bg-black/50 p-4 rounded-lg w-full`}>
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center justify-between gap-2"><div className="">{firstName}</div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>
          <div className="flex items-center justify-between gap-2"><div className="">{lastName}</div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>
        </div>
        <div className="flex items-center justify-between"><div className="">{email}</div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>
        <div className="flex items-center justify-between"><div className="">{pronouns}</div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>
        <div className="flex items-center justify-between"><div className="">{PoSt}</div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>
        {facebook ?  <div className="">{<div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaFacebook /><input className="">{facebook}</input></div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>}</div> : null}

        {instagram ?  <div className="">{<div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaInstagramSquare /><span className="">{instagram}</span></div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>}</div> : null}

        {discord ?  <div className="">{<div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaDiscord /><span className="">{discord}</span></div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>}</div> : null}

        {whatsapp ?  <div className="">{<div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaWhatsapp /><span className="">{whatsapp}</span></div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>}</div> : null}
        
        {phone_nr ?  <div className="">{<div className="flex items-center justify-between"><div className="flex items-center gap-2"><FaSquarePhone /><span className="">{phone_nr}</span></div><MdEdit className={`${popEffect}`} size="24" color="#798dfc" /></div>}</div> : null}
        </div>
    </div>
  );
}

export default Profile;
