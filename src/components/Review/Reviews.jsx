import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from './ReviewCard.jsx';

const reviews1 = [
    {
        id: 1,
        rating: 5,
        text: 'This is the best fucking burger EVER'
    },
    {
        id: 2,
        rating: 5,
        text: 'This is the best fucking burger EVER'
    },
    {
        id: 3,
        rating: 5,
        text: 'This is the best fucking burger EVER'
    },
    {
        id: 4,
        rating: 5,
        text: 'This is the best fucking burger EVER'
    },
    {
        id: 5,
        rating: 5,
        text: 'This is the best fucking burger EVER'
    },
    {
        id: 6,
        rating: 5,
        text: 'This is the best fucking burger EVER'
    },
   
  ]

const Reviews = props => {
    const [reviews, setReviews] = useState();
    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://www.eatanywhere.test:8080/api/reviews/'+props.id);
            const data = await response.json();
            console.log(data);
            setReviews(data);
        }

        // fetchData();
    }, []);

    return (
        <Slider {...settings}>
            {   
                reviews1 &&
                reviews1.map((review, key) => (
                    <ReviewCard 
                        key={key}
                        review={review}
                    />
                ))
            }

        </Slider>
    )

}

export default Reviews;