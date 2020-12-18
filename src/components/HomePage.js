import React, {Component} from 'react'
import CardsContainer from './CardsContainer'

export default class Home extends Component{
    render(){
        return(
            <div>
            <div>
                <h1>Welcome {this.props.user.username}!</h1>
            </div>
            <CardsContainer allTrails={this.props.allTrails}/>
            </div>
        );
    }
}