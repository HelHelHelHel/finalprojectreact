import React, { useState, useEffect } from 'react';

const ReviewCard = props => {
    const [reviews, setReviews] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://www.eatanywhere.test:8080/api/reviews/'+props.id);
            const data = await response.json();
            // console.log(data);
            setReviews(data);
        }

        fetchData();
    }, [])

    useEffect(() => {
        console.log(reviews)
    }, [reviews])

    return (
        <div className="row">
            {   
                reviews &&
                reviews.map((review, key) => (
                    <div key={key} className="card col-md-4">
                        <div>
                            <p>
                               Rating: { review.rating }
                            </p>
                            <p>
                               Review:
                            </p>
                            <p>
                                { review.text }
                            </p>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ReviewCard;