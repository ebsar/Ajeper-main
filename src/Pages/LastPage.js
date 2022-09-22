import React, { useState } from "react";
import "./LastPage.scss";
import {
  AiOutlineCopyrightCircle,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF, FaPlay } from "react-icons/fa";
import {BsChevronDown} from 'react-icons/bs';
import { Link } from "react-router-dom";
import Ajeper from "../Photos/Ajeper.png";

function LastPage() {
    const [MobileSize, setMobileSize] = useState(false);
  const onMobile = () => {
    setMobileSize((prev) => !prev);
  }
  const [MobileSize1, setMobileSize1] = useState(false);
  const onMobile1 = () => {
    setMobileSize1((prev) => !prev);
  }
  const [MobileSize2, setMobileSize2] = useState(false);
  const onMobile2 = () => {
    setMobileSize2((prev) => !prev);
  }
  const [MobileSize3, setMobileSize3] = useState(false);
  const onMobile3 = () => {
    setMobileSize3((prev) => !prev);
  }
  const Company = [
    {
      text: "About us",
    },
    {
      text: "Our offering",
    },
    {
      text: "Newsroom",
    },
    {
      text: "investor",
    },
    {
      text: "Blog",
    },
    {
      text: "Careers",
    },
    {
      text: "Gift cards",
    },
  ];
  const Products = [
    {
      text: "Ride",
    },
    {
      text: "Drive",
    },
    {
      text: "Deliver",
    },
    {
      text: "Eat",
    },
    {
      text: "AP for Business",
    },
    {
      text: "AP Freight",
    },
  ];
  const Driver = [
    {
      text: "Becom a Driver",
    },
    {
      text: "Earning",
    },
    {
      text: "Cities",
    },
    {
      text: "Help",
    },
    {
      text: "Safety",
    },
    {
      text: "Application",
    },
    {
      text: "Express Driver",
    },
  ];
  const Profile = [
    {
      text: "Sign up to ride",
    },
    {
      text: "Fare Estimate",
    },
    {
      text: "Cities",
    },
    {
      text: "Help",
    },
    {
      text: "Safety",
    },
    {
      text: "Business Profile",
    },
    {
      text: "Rewards",
    },
  ];
  return (
    <div className="Last-Page">
      <div className="Leave-Page-First-Container">
        <div className="Last-Page-Ajeper">
          <div className="Last-page-Icon">
            <img src={Ajeper} alt="Ajeper" />
            <span>AjePer</span>
          </div>
          <span>Download our app</span>
          <div className="Leaving-Page-Download-App">
            <a href="www.apple.com" class="btn btn-google" alt="btn1">
              Google Play
            </a>
            <a href="www.apple.com" class="btn btn-Apple" alt="btn1">
              App Store
            </a>
          </div>
          <span>Follow us</span>
          <div className="Last-Page-Follow-us">
            <div className="Leaving-Page-Second-Container">
              <FaFacebookF color="white" />
              <AiOutlineTwitter color="white" />
              <AiFillLinkedin color="white" />
              <FaPlay color="white" />
            </div>
          </div>
        </div>
        <div className="Last-Page-Component">
          <div className="Last-Page-Company">
            <div className="Company-Component">
              <div className="Puting-dispplay-flex">
            <Link to="/" style={{fontSize:'large', fontWeight:'bolder'}}>Company</Link>
            <div className="Icon-Company">
            <BsChevronDown onClick={onMobile} color="white"/>
            </div>
            </div>
            {
                MobileSize && 
                <div> 
                   {Company.map((props1) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props1.text}</Link>
                </div>
              );
            })} 
                </div>
            }
            </div>
            <div className="Last-Page-Company-1" >
            {Company.map((props1) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props1.text}</Link>
                </div>
              );
            })}
            </div>
          </div>
          <div className="Last-Page-Product">
            <div className="Last-Page-Product1">
              <div className="Puting-dispplay-flex" >
            <Link to="/" style={{fontSize:'large', fontWeight:'bolder'}}>Products</Link>
            <div className="Icon-Product">
            <BsChevronDown onClick={onMobile1} color="white"/>
            </div>
            </div>
            {
                MobileSize1 && 
                <div> 
                   {Products.map((props2) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props2.text}</Link>
                </div>
              );
            })} 
                </div>
            }
            </div>
            <div className="Last-Page-Products">
            {Products.map((props2) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props2.text}</Link>
                </div>
              );
            })}
            </div>
          </div>
          <div className="Last-Page-Driver">
            <div className="Puting-dispplay-flex" >
            <Link style={{fontSize:'large', fontWeight:'bolder'}} to="/">Driver</Link>
            <div className="Icon-Driver">
            <BsChevronDown onClick={onMobile2} color="white"/>
            </div>
            </div>
            {
                MobileSize2 && 
                <div> 
                   {Driver.map((props3) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props3.text}</Link>
                </div>
              );
            })} 
                </div>
            }
            <div className="Last-Page-Driver-Component">
            {Driver.map((props3) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props3.text}</Link>
                </div>
              );
            })}
            </div>
          </div>
          <div className="Last-Page-Profile">
            <div className="Puting-dispplay-flex">
            <Link to="/" style={{fontSize:'large', fontWeight:'bolder'}}>Profile</Link>
            <div className="Icon-Profile">
            <BsChevronDown onClick={onMobile3} color="white"/>
            </div>
          </div>
            {
                MobileSize3 && 
                <div> 
                   {Profile.map((props4) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props4.text}</Link>
                </div>
              );
            })} 
                </div>
            }
            <div className="Last-Page-Profile-Container">
            {Profile.map((props4, i) => {
              return (
                <div className="Lst-Page-Props">
                  <Link>{props4.text}</Link>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
      <div className="Last-Page-Copyright">
        <div className="Last-Page-Left-Side">
        <AiOutlineCopyrightCircle color="white" />
        <span > AjePer. All rights reserved</span>
        </div>
        <div className="Last-Page-Right-Page">
            <Link>Accessivility</Link>
            <Link>Privacy</Link>
            <Link>Copyright</Link>
            <Link>Terms of Use</Link>
        </div>
      </div>
    </div>
  );
}
export default LastPage;
