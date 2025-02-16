import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import profile from './generic_profile.png';
import matchProfile from './match-profile.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Carousel from 'react-bootstrap/Carousel';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import { popEffect, responsive } from "./styles";


function Matches({name="Unknown", pronouns="they/them", discord="discord", facebook="facebook", whatsapp="whatsapp", phone_nr="phone number", instagram="instagram", matchRate=45}) {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="flex flex-row gap-2 justify-between lex-grow items-center gap-4 bg-black/60 rounded-md transform transition-all duration-300 ease-in-out hover:scale-105 p-8 box-border">
    <IoIosArrowDropleftCircle size={36} />
    <div className="flex flex-col items-center gap-4">
    <div className="w-2/3 bg-cover bg-center rounded-full " style={{ backgroundImage: `url(${matchProfile})` }}><CircularProgressbar value={matchRate} styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',

              // Text size
              textSize: '16px',

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
              
              // Colors
              pathColor: `#798dfc`,
              textColor: '#f88',
              trailColor: 'black',
              backgroundColor: '#3e98c7',
            })}/></div>
            <div>{matchRate}%</div>
            <div className="flex flex-col gap-8">
            <div className="flex flex-col w-full items-center">
              <div className="">{name}</div>
              <div className="">{pronouns}</div>
            </div>
            <div className="w-full flex flex-row justify-evenly gap-4 text-[#798dfc] bg-black px-4 py-2 rounded-full">
              {facebook ?  <div className={`${popEffect}`}>{<FaFacebook size={36} />}</div> : null}
              {instagram ?  <div className={`${popEffect}`}>{<FaInstagramSquare size={36} />}</div> : null}
              {discord ?  <div className={`${popEffect}`}>{<FaDiscord size={36} />}</div> : null}
              {whatsapp ?  <div className={`${popEffect}`}>{<FaWhatsapp size={36} />}</div> : null}
              {phone_nr ?  <div className={`${popEffect}`}>{<FaSquarePhone size={36} />}</div> : null}
            </div>
            </div>
    </div>
    <IoIosArrowDroprightCircle size={36} />
    </div>
  );
}

export default Matches;
