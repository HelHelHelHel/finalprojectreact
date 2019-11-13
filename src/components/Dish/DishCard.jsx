import React, { useState, useEffect } from 'react';

import ReviewCard from '../Review/ReviewCard.jsx'

const DishCard = props => {
    const [dishes, setDishes] = useState()

    useEffect(() => {
        async function fetchDishes(){
            const response = await fetch ('http://www.eatanywhere.test:8080/api/dishes/'+props.id);
            const data = await response.json();
            setDishes(data);
        }
        fetchDishes();
    }, [])


    return (
        <div className="row">
            {
                dishes &&
                dishes.map((dish, key)=> (
                    <div key={key}>
                        <div>
                            <p>
                                {dish.name}
                            </p>
                            <p>
                                {dish.description}
                            </p>
                        </div>
                        <div>
                            <ReviewCard 
                            id={dish.id} 
                            />
                        </div>
                    </div>
                ))
            }  
        </div>
    )
}

export default DishCard;