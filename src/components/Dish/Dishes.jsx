import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishCard from "./DishCard.jsx";

const dishes1 = [
  {
      id: 1,
      name: 'Burger',
      description: 'This is the best fucking burger EVER'
  },
  {
      id: 2,
      name: 'Burger',
      description: 'This is the best fucking burger EVER'
  },
  {
      id: 3,
      name: 'Burger',
      description: 'This is the best fucking burger EVER'
  }
]

const Dishes = props => {
  const [dishes, setDishes] = useState();
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '20px',
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    useEffect(() => {
        async function fetchDishes(){
            const response = await fetch ('http://www.eatanywhere.test:8080/api/dishes/'+props.id);
            const data = await response.json();
            setDishes(data);
        }
        // fetchDishes();
    }, [])

  

  return (
    <Slider {...settings}>
      { 
        dishes1 &&
        dishes1.map((dish, key) => (
          <DishCard 
            key={key}
            dish={dish}
          />
        ))
      }
    </Slider>
  );

}

export default Dishes;