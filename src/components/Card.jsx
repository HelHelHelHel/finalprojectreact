import React, {Component} from 'react';
import CardCarousel from './CardCarousel.jsx';
import ReviewCard from './ReviewCard.jsx';


import './index.scss';

export default class Card extends Component {
    render(){
        return (
           
           <div className="cardBig">
               <h5>Wings</h5>
               <p>diets: keto</p>
               <a href="">restaurant link</a>
               <p>made of: chicken, sauce</p>
               <ReviewCard/>
               <ReviewCard/>
               <ReviewCard/>
           </div>
        )
    }
}