import React from 'react'
import TrailCard from './TrailCard'

function CardsContainer({allTrails}) {

    const renderTrails = () => allTrails.map(
        trail => <TrailCard
            key={trail.id}
            trail={trail}
        />
    )

    return (
        <div className="sixteen wide column">
            <div className="cards-container">
                {renderTrails()}
            </div>
        </div>
    )
}

export default CardsContainer;