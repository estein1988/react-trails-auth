import React, { Component } from "react";
import TrailCard from './TrailCard'

class CardsContainer extends Component {

    render() {

        const renderTrails = () => this.props.allTrails.map(
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
}

export default CardsContainer;