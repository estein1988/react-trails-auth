import React, { useEffect } from 'react'
import CardsContainer from './CardsContainer'

export default function HomePage({user, allTrails, leaveReview, deleteReview, editReview, fetchModels}) {

    useEffect(() => {
        fetchModels()
    }, [])

    return(
        <div>
            <h1>Welcome {user.username}</h1>
            <CardsContainer
                allTrails={allTrails}
                user={user}
                leaveReview={leaveReview}
                deleteReview={deleteReview}
                editReview={editReview}
                fetchModels={fetchModels}
            />
        </div>
    )
}