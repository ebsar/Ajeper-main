import './LastPage.scss';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function LastPage (){
    return(
        <div className="Last-Page">
            <div className="LastPage-First-Container">
                <div className="LastPage-FollowUs"></div>
                <div className="LastPage-Company"></div>
                <div className="LastPage-Product"></div>
                <div className="LastPage-Driver"></div>
                <div className="LastPage-Profile"></div>
            </div>
            <div className="Lastpage-Sexond-Container">
                <div>
                <AiOutlineCopyrightCircle color='white'/>
                <span>2022 AjePer, All Right reserved</span>
                </div>
                <div className='Last-Page-Links'>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </div>
            </div>
        </div>
    )
}
export default LastPage;