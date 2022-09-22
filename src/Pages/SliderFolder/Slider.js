import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Data } from './Data'
import { AiFillStar } from 'react-icons/ai'
import './Slider.scss';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:600, itemsToShow: 2 }
];

const Testimonials = () => {

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };

    return (
        <div className='SLIDER-FIELD' >
            <div className='slider-title'>
                <small>USERS SHARE THEIR EXPERIENCE</small>
                <span>A community full of stories</span>
            </div>
<Carousel className="slider" 
                breakPoints={breakPoints} 
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
{/* <div className="profile" style={{content: `url(${props.profile})`}}></div> */}
                {Data.map((props) => {
                    return(
                        <div className='Slider-First-Container'>
                            <div className='Slide-Profile-Image'>
                            <div className="profile" style={{content: `url(${props.profile})`}}></div>
                            <div className='Slider-Gap'>
                            <div className='Slide-Rating-Profile'>
                            {
                                Array(props.rating)
                                .fill()
                                .map((_)=>(
                                    <p><AiFillStar/></p>
                                ))
                                }
                                <p>{props.ratingnumber}</p>
                            </div>
                            </div>
                            </div>
                            <div className='Slider-Second-Container'>
                                <span>{props.comment}</span>
                            </div>
                            <div className='Slider-Name-Container'>
                                <span style={{color:'#514BC3'}}>{props.name}</span>
                                <span>{props.user}</span>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Testimonials