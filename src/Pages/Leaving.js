
import React from 'react';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { ImMobile2 } from 'react-icons/im';
import { AiFillTags } from 'react-icons/ai';
import './Leaving.scss';

import Car from '../Photos/Car.png';
import Background12 from '../Photos/Background12.png';

const valuesData = [
  {
    title:"Trust who you travel with",
    text:"We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.",
    icon:<VscWorkspaceTrusted/>,
    color:"#D60665",
    bgColor:"#F4BFD7"
  },

  {
    title:"Scroll, click, tap and go!",
    text:"Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
    icon:<ImMobile2/>,
    color:"#FFB300",
    bgColor:"#FDD677",
    fontFamily:'poppins'
  },

  {
    title:"Save money",
    text:"No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
    icon:<AiFillTags/>,
    color:"#0D13D7",
    bgColor:"#C1C2F4"
  }
]

function Leaving() {
  return (
    <div className='Leaving-Container'>
      <div className='Leaving-Left-Side'>
      <small style={{ fontFamily: 'poppins', fontSize: 'small' }} data-aos='zoom-in' >WHY SHOULD I CARPOOL?</small>
          <span style={{ fontFamily: 'poppins', fontSize: 'xx-Large', fontWeight: 'bolder' }} data-aos='zoom-in' > AjePer Values </span>
          {valuesData.map((props,i) => {
            return(
              <div className='values-card' key={i}  >
              <div className='values-icon'
              style={{color: `${props.color}`, backgroundColor:`${props.bgColor}`, fontFamily:`${props.fontFamily}`}}
              data-aos='fade-right' >
                {props.icon}
              </div>

               <div className='text'  >
                <h3 data-aos='fade-right' >{props.title}</h3>
                <p data-aos='fade-right'>{props.text}</p>
               </div>
              </div>
            )
          })}

      </div>
      <div className='right-side' data-aos='zoom-in' >
        <img className='violet-bg' src={Background12} alt='Background12'data-aos='fade-left' />
        <img className='car-img' src={Car} alt='Car' data-aos='fade-right'/>
      </div>
    </div>
  );
}

export default Leaving;



















