import React, { useState, useEffect } from 'react'

import DishCard from '../Dish/DishCard.jsx'
import Dishes from '../Dish/Dishes.jsx';
import { windowWhen } from 'rxjs/operator/windowWhen';

const restaurantStyle = {
    border: '1px solid black',
    width: '70vw',
    height: '70vh',
    padding: '2rem'
}

const restaurants1 = [
    {
        id: 1,
        name: 'Burger Queen',
        address: '1236 1300th Street',
        phone: '+1 712 579 5715',
        website_url: 'www.restaurant.com/'
    }
]

const RestaurantCard = props => {
    const [restaurants, setRestaurants] = useState();

    useEffect(()=> {
        async function fetchRestaurants(){
            const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants');
            const data = await response.json();
            setRestaurants (data);
        }
            // fetchRestaurants();
    },[]);

    
    return (
        <>
           {
               restaurants1 && 
               restaurants1.map((restaurant, key) => (
                   <div key={key} style={restaurantStyle}>
                       <div>
                           <p>
                               <strong>{restaurant.name}</strong>
                           </p>
                           <p>
                               {restaurant.address} <br/>
                               {restaurant.phone} <br/>
                               {restaurant.website_url}
                           </p>
                       </div>
                       <div>
                           <Dishes id={restaurant.id}/>
                       </div>
                   </div>
               ))
           
            }
        </>
    )
}

export default RestaurantCard;