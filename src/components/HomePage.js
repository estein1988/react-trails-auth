import React, {Component} from 'react'

export default class Home extends Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.user.full_name}!</h1>
            </div>
        );
    }
}