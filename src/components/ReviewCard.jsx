import React, {Component} from 'react';
import ReactStars from 'react-stars'


import './index.scss';

export default class ReviewCard extends Component {
    constructor(props){
        super(props)
        
    }
    
    
    render(){
        const ratingChanged = (newRating) => {
        console.log(newRating)
      }
        return (
           
           <div className="reviewCard card">
               <img className="dishImg" src="./images/IMG_1589.jpg" alt=""/>
               
               <ReactStars
            count={5}
            onChange={ratingChanged}
            size={16}
            color2={'#ffd700'} />
               <p>This meal was really awesome</p>
                {/* <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}

           </div>
        )
    }
}
