import React, {useEffect} from 'react'

export default function TrailCard(props) {

    useEffect(() => {
        props.fetchModels()
    }, [])
        
        return (
            <div className="trail-cards">
                <h1>{props.trail.trail_name}</h1>
            </div>
        )
    }