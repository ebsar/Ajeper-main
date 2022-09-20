import './Download.scss';
import ScrollGroup2 from '../Photos/ScrollGroup2.png';
function Download (){
    return (
        <div className='Download-Contaienr' data-aos='fade-up'>
        <div className='Download-left-Contaienr'>
            <div className='download-Text-Contaienr'>
                <span data-aos='fade-right'> Download AjePer App</span>
                <small data-aos='fade-right'>Book cabs on the run, even when you’re offline. Track ride and keep your loved ones informed and get access to the best deals</small>
                <div className='Download-Button-Section'>
                <a data-aos='fade-right' className='btn btn-google' href='www.aple.com' >Download</a>
                <a data-aos='fade-left' className='btn btn-Apple' href='www.aple.com' >Download</a>
                </div>
            </div>
        </div>
        <div className='Download-right-Contaienr'>
            <img src={ScrollGroup2} alt="ScrollGroup2" data-aos='fade-up' />
        </div>
        </div>
    )
}
export default Download;