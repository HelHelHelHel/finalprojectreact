import React from "react";
import Slider from "react-slick";
import DishCard from "./DishCard.jsx";
 
class DishSlider extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <DishCard id={this.props.id} />
        <DishCard id={this.props.id} />
      </Slider>
    );
  }
}

export default DishSlider