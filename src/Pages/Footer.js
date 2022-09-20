import { Link } from 'react-router-dom';
import './Footer.scss';
import Group15 from './AjeperLogo/Group15.png';
import Group14 from './AjeperLogo/Group14.png';
import Group12 from './AjeperLogo/Group12.png';
import Group13 from './AjeperLogo/Group13.png';
import Group16 from './AjeperLogo/Group16.png';
import Purplebackground from './AjeperLogo/Purplebackground.webp';
import Group177 from './AjeperLogo/Group177.png';
function Footer() {
    return (
        <div className='Footer-first-container'  >
            <div className='Footer-Left-Side'>
                <span>Ride Together At</span>
                <small>Low Price</small>
                <p>AjePer is the smart Carpooling service. Join 700,000 like-minded people find both drivers or passengers saving money and the planet by car sharing. </p>
                <div className='Footer-Button-Section'>
                    <Link className='Footer-Get-Started' to='/' >Get Started</Link>
                    <a href='www.apple.com' class="btn btn-google" alt='btn1' >Google Play</a>
                    <a href='www.apple.com' class="btn btn-Apple" alt='btn1' >App Store</a>
                </div>
            </div>
            <div className='Footer-Right-Side'>
            <img className='Footer-Group16' src={Group16} alt='Group16' />
                    <img className='Footer-Group15' src={Group15} alt='Group15' />
                    <img className='Footer-Group14' src={Group14} alt='Group14' />
                    <img className='Footer-Group13' src={Group13} alt='Group13' />
                    <img className='Footer-Group12' src={Group12} alt='Group12' />
                <img className='Footer-Background-Img' src={Purplebackground} alt='purple' />
                <img className='Footer-Car-Img' src={Group177} alt='Group117' /> 
                
            </div>
        </div>
    )
}
export default Footer;