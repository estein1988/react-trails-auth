import React, {useState} from 'react'

export default function LeaveReview(props){
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.leaveReview(props.trail.id, props.user.id, rating, review)
        props.fetchModels()
    }

    return(
        <div className="ui inverted segment">
            <form className='ui inverted form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label>
                        Leave a Review:
                    </label>
                    <textarea
                        rows="2"
                        placeHolder="Review"
                        name="review"
                        id="review"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className='field'>
                    <select onChange={e => setRating(e.target.value)}>
                        <option value=''>Rating</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <button className="ui huge primary button" type='submit' id='submit' value='submit'>
                    Post your review
                </button>
            </form>
        </div>
    )
}