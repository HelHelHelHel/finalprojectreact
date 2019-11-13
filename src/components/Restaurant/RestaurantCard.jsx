import React, { useState, useEffect } from 'react'

import DishCard from '../Dish/DishCard.jsx'

const RestaurantCard = props => {
    const [restaurants, setRestaurants] = useState();

    useEffect(()=> {
        async function fetchRestaurants(){
            const response = await fetch('http://www.eatanywhere.test:8080/api/restaurants');
            const data = await response.json();
            setRestaurants (data);
        }
            fetchRestaurants();
    },[]);

    
    return (
        <>
           {
               restaurants && 
               restaurants.map((restaurant, key) => (
                   <div key={key} className="card">
                       <div className="card-header">
                           <p className="font-weight-bold">
                               {restaurant.name}
                           </p>
                           <p>
                               {restaurant.address} 
                           </p>
                           <p>
                               {restaurant.phone}
                           </p>
                           <p>
                               {restaurant.website_url}
                           </p>
                       </div>
                       <div className="card-body">
                           <DishCard id={restaurant.id}/>
                       </div>
                   </div>
               ))
           
            }
        </>
    )
}

export default RestaurantCard;