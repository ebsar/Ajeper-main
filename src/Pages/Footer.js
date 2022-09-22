import { Link } from 'react-router-dom';
import './Footer.scss';
import Group15 from './AjeperLogo/Group15.png';
import Group14 from './AjeperLogo/Group14.png';
import Group12 from './AjeperLogo/Group12.png';
import Group13 from './AjeperLogo/Group13.png';
import Group16 from './AjeperLogo/Group16.png';
import Group5 from './AjeperLogo/Group5.png';
import Oval from './AjeperLogo/Oval.png';
import Purplebackground from './AjeperLogo/Purplebackground.webp';
import Group177 from './AjeperLogo/Group177.png';
import Carousel from 'react-elastic-carousel'
function Footer() {
    return (
        <div className='Footer-first-container'  >
            <div className='Footer-Left-Side'>
                <span data-aos='fade-left'>Ride Together At</span>
                <small data-aos='fade-right'>Low Price</small>
                <p data-aos='fade-left' >AjePer is the smart Carpooling service. Join 700,000 like-minded people find both drivers or passengers saving money and the planet by car sharing. </p>
                <div className='Footer-Button-Section' data-aos='fade-up'>
                    <Link className='Footer-Get-Started' to='/' >Get Started</Link>
                    <a href='www.apple.com' class="btn btn-google" alt='btn1' >Google Play</a>
                    <a href='www.apple.com' class="btn btn-Apple" alt='btn1' >App Store</a>
                </div>
            </div>
            <div className='Footer-Right-Side' >
            <img className='Footer-Group16' src={Group16} alt='Group16' data-aos='zoom-in' />
                    <img className='Footer-Group15' src={Group15} alt='Group15' data-aos='zoom-in' />
                    <img className='Footer-Group14' src={Group14} alt='Group14' data-aos='zoom-in' />
                    <img className='Footer-Group13' src={Group13} alt='Group13' data-aos='zoom-in' />
                    <img className='Footer-Group12' src={Group12} alt='Group12' data-aos='zoom-in' />
                <img className='Footer-Background-Img' src={Purplebackground} alt='purple' data-aos='fade-left' />
                <img className='Footer-Car-Img' src={Group177} alt='Group117' data-aos='zoom-in' /> 
                <div className='Footer-Amir-Mustafa'>
                    <div className='Amir-Mustafa-img'>
                    <img className='Oval-img' src={Oval} alt='Oval' />
                    <span>Amir Mustafa</span>
                    </div>
                    <div className='Prishtin-Prizren-Line'>
                    <img src={Group5} alt='Group5' />
                    <div className='Footer-Prizre-Prishtin' >
                    <small>Prizren</small>
                    <small>Prishtina</small>
                    </div>
                    </div>
                </div>
                <div className='Footer-Map'>
                    <span>Select your location</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;