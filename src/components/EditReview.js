import React, {useState} from 'react';

export default function EditReview(props){
    const [comment, setReview] = useState('')
    const [rating, setRating] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editReview(props.review, props.trail, props.user, rating, comment);
        props.fetchModels();
    }

    return (
        <div>
            <div className='column'>
                <div className='ui two column centered grid'>
                    <div id='edit-review' className='ui card'>
                        <div className='content'>
                            <form className='ui form' onSubmit={handleSubmit}>
                                <div className='field'>
                                    <label>Review: {props.review.review}</label>
                                    <input type='text' name='review' value={comment} onChange={e => setReview(e.target.value)} />
                                </div>
                                <div className='field'>
                                    <label>Rating: {props.review.rating}</label>
                                    <input type='text' name='rating' value={rating} onChange={e => setRating(e.target.value)} />
                                </div>
                                <input className='ui black button' type='submit' id='submit' value='submit' />
                                <button className='ui green button' onClick={props.handleToggle}>Go Back</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}