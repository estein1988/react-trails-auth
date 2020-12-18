import React, {Component} from 'react'

export default class Login extends Component {

    state = {
        usernmae: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
            .then(() => this.props.history.push('/'))
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange}/>
                    </div>

                    <div className="field">
                        <input placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <button className="ui huge primary button" type='submit' id='submit' value='Login'>
                        Login
                    </button>
                </form>
            </div>
        )
    }





}