import React, { useEffect } from 'react'
import CardsContainer from './CardsContainer'

export default function HomePage({user, allTrails, leaveReview, fetchModels}) {

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
                fetchModels={fetchModels}
            />
        </div>
    )
}