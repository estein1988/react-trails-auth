import React, {useState} from 'react';
import EditReview from './EditReview';

export default function Reviews({trail, user, deleteReview, editReview, fetchModels}) {
    const handleToggle = (event) => setIsToggled(!isToggled)
    const [isToggled, setIsToggled] = useState(false)
    
    const RegularReview = () => (
        <div id='review-parent'>
            <p id='review-text'>
                {trail.reviews.length > 0
                    ? trail.reviews.map(review =>{
                        return( 
                            <div id='review-section'>
                                <spanc>&nbsp;</spanc>
                                "{review.review}"&nbsp;-{review.user.username}<br></br>
                                <button id='remove-review' className='ui tiny negative button' onClick={() => {
                                    deleteReview(review, user)
                                    fetchModels()
                                }}>Delete Review
                                </button>
                                <button id='edit-profile-button' className='ui tiny green button' onClick={handleToggle}>
                                    Edit Review
                                </button>
                            </div>
                        )
                        })    
                    : 'No reviews for this trail have been submitted'
                }
            </p>
        </div>
    )

    return isToggled
        ? trail.reviews.map(
            review => <EditReview
                key={review.id}
                review={review}
                user={user}
                editReview={editReview}
                fetchModels={fetchModels}
                handleToggle={handleToggle}
            />
        )
        : RegularReview()
}