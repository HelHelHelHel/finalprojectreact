import React from 'react';
import Reviews from '../Review/Reviews.jsx'

const dishesStyle = {
    border: '1px solid black',
    padding: '1rem',
    marginBottom: '1rem',
    height: '50vh',
    width: '50vw'
}

const DishCard = props => {
    return (
        <>
            <div key={props.key} style={dishesStyle}>
                <div>
                    <h3 style={{margin: '0'}}>{props.dish.name}</h3> <br/>
                    <p>{props.dish.description}</p>
                </div>
                <Reviews 
                    id={props.dish.id} 
                />
            </div>
        </>
    )
}

export default DishCard;