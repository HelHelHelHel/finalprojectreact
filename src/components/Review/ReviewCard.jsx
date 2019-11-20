import React from 'react';

const reviewsStyle = {
    // border: '1px solid black',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    width: '85%',
    height: '65%',
    padding: '1rem',
    margin: '0 auto 1rem'

}

const ReviewCard = props => {
    return (
        <>
            <div>
                <img src="../../img/avocado_blueberry_walnut_salad.jpg" alt=""/>
                <div style={reviewsStyle} key={ props.key } >
                        Rating: { props.review.rating } <br/>
                        Review: <br/>
                        { props.review.text }
                </div>
            </div>
        </>
    )
}

export default ReviewCard;