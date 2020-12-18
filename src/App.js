import React, { Component } from 'react';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Redirect, Route, Switch} from 'react-router-dom'
import './App.css';

const loginURL = 'http://localhost:8000/login/'
const profileURL = 'http://localhost:8000/profile/'
const trailsURL = 'http://localhost:8000/trails/'
const usersURL = 'http://localhost:8000/users/'

class App extends Component {
  
  state = {
    user: {},
    allTrails: [],
    allUsers: []
  }

  fetchModels = () => {
    this.profileFetch()
    this.trailsFetch()
  }

  trailsFetch = () => {
    fetch(trailsURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      this.setState({allTrails: result})
    })
  }
  
  profileFetch = () => {
    fetch(profileURL, {
      method: 'GET', 
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
      },
    })
    .then(response => response.json())
    .then(result => this.setState({user: result}))
  }

  componentDidMount(){
    if(localStorage.token){
      this.fetchModels()
    }
  }

  componentDidUpdate(){
    if(localStorage.token && this.state.allTrails.length === 0) {
      this.fetchModels()
    }
  }

  login = (user) => {
    return fetch(loginURL, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user)
    })
    .then(response => response.json())
    .then(result => {
      (result.detail === 'No active account found with the given credentials')
        ? window.location.reload()
        : localStorage.setItem('token', result.access)
    })
  }
  
  render(){
    return (
      <div className="App">
        <Switch>

          <PrivateRoute
            exact path='/'
            user={this.state.user}
            allUsers={this.state.allUsers}
            allTrails={this.state.allTrails}
            profileFetch={this.profileFetch}
          />

          <Route
            path='/login'
            render={(props) => <Login {...props} login={this.login} /> } />
          <Route render={() => <Redirect to='/' />} />

        </Switch>

        <SignUp />
      </div>
    );
  }
}

export default App;
