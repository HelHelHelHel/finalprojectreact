import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from './ReviewCard.jsx';


  
function CardCarousel() {
  return (
	<div >
		<Carousel>
			<div><img className="dishImg" src="./images/IMG_1589.jpg" alt=""/></div>
            <div><ReviewCard/></div>
            <div><ReviewCard/></div>
        </Carousel>
    </div>
  );
}

export default CardCarousel;