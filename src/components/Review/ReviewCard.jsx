import React from 'react';

const reviewsStyle = {
    border: '1px solid black',
    padding: '1rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    marginBottom: '2rem',

}

const ReviewCard = props => {
    return (
        <>
            <div style={reviewsStyle} key={props.key} >
                <p>
                    Rating: { props.review.rating }
                </p>
                <p>
                    Review:
                </p>
                <p>
                    { props.review.text }
                </p>
            </div>
        </>
    )
}

export default ReviewCard;