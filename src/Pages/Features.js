import {TbCurrentLocation} from "react-icons/tb";
import {AiOutlineSafety} from "react-icons/ai";
import {GiClick} from "react-icons/gi";
import {MdVerified, MdOutlineDesignServices} from "react-icons/md";
import {BsChat} from 'react-icons/bs';
import './Features.scss';
import { Link } from 'react-router-dom';
import Ajeper from '../Photos/Ajeper.png';
import agentcopy from '../Photos/agentcopy.png';
import sos1copy from '../Photos/sos1copy.png';
import Group2Copy from '../Photos/Group2Copy.png'; 
import Grouptouch from '../Photos/Grouptouch.png';
import GroupAjeper from '../Photos/GroupAjeper.png';
import Group5 from '../Photos/Group5.png'
import nountracker618738 from '../Photos/nountracker618738.png'
function Features (){
    const someFeatures=[
        {
            icon:<TbCurrentLocation/>,
            text:'Real Time Tracking'
        },
        {
            icon:< AiOutlineSafety />,
            text:'Safet ToolKit'
        },{
            icon:<GiClick/>,
            text:'1 Click Ride Post'
        }
    ];
    const someFeatures2 =[
        {
            icon: <MdVerified/> ,
            text:'Verified Riders'
        },{
            icon: <BsChat/> ,
            text:'24*7 Support'
        },{
            icon:<MdOutlineDesignServices/>,
            text:'New Friendly UI'
        }
    ];
    return(
        <div className="Features-Features">
        <div className="Features-first-Container">
            <div className="Features-Title" data-aos='fade-right'>
                <small>Features</small>
                <span>Why Choose AjePer</span>
                <p>At AjePer the prime focus has always been easy to use and simple user experience. We always try our best to balance between features and</p>
            </div>
            <div className="Features-Icon-Text">
                <div className="Features-Makeing-Test1">
                    {someFeatures.map((somefeatures) => 
                    <div className="Features-Icon-Text-Text" data-aos='fade-right'>
                    <div>{somefeatures.icon}</div>
                    <div>{somefeatures.text}</div>
                    </div>
                    )

                    }
                    </div>
                    <div className="Features-Makeing-Test1" >
                    {someFeatures2.map((somefeatures2) => 
                    <div className="Features-Icon-Text-Text-1" data-aos='fade-left'>
                    <div >{somefeatures2.icon}</div>
                    <div>{somefeatures2.text}</div>
                    </div>
                    )

                    }
                    </div>
            </div>
            <div className="Features-Learn-More">
                    <Link to="/" >Learn More</Link>
                    </div>
        </div>
        <div className="Features-Circle-Text">
            <div className="Features-Circle-1"data-aos='zoom-in' >
                <img className="Agentcopy-image" src={agentcopy} alt='Image1' />
                <img className="sos-image" src={sos1copy} alt='Image2' />
            </div>
            <div className="Features-Circle-2"data-aos='zoom-in'>
                <img className="Features-Group2Copy" src={Group2Copy} alt='Image3' />
                <img className="Features-Grouptouch" src={Grouptouch} alt='Image4'/>
            </div>
            <div className="Features-Circle-3"data-aos='zoom-in'>
                <img className="Features-Group5" src={Group5} alt='Image5' />
                <img className="Features-GroupAjeper" src={GroupAjeper} alt='Image6' />
            </div>
            <div className="Features-Circle-4"data-aos='zoom-in'>
                <img className="Features-nountracker618738" src={nountracker618738} alt='Image7'/>
            </div>
            <div className="Features-Text-1" data-aos='zoom-in'>
                <img src={Ajeper} alt='Image8' />
                <span>AjePer</span>
            </div>
        </div>
        </div>
    );
}
export default Features;