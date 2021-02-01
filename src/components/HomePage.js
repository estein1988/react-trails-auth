import React, { useEffect } from 'react'
import CardsContainer from './CardsContainer'

export default function HomePage(props) {

    useEffect(() => {
        props.fetchModels()
    }, [])

    return(
        <div>
            <h1>Welcome {props.user.username}</h1>
            <CardsContainer allTrails={props.allTrails} />
        </div>
    )
}