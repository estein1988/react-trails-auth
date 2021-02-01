import React, { useState, useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Redirect, Route, Switch} from 'react-router-dom'
import './App.css';

const loginURL = 'http://localhost:8000/login/'
const profileURL = 'http://localhost:8000/profile/'
const trailsURL = 'http://localhost:8000/trails/'
const reviewsURL = 'http://localhost:8000/reviews/'

function App() {

  const [user, setUser] = useState({})
  const [allTrails, setAllTrails] = useState([])
  const [allReviews, setAllReviews] = useState([])

  useEffect(() => {
    if(localStorage.token){
      fetchModels()
    }
  }, [])
  
  const fetchModels = () => {
    profileFetch()
    trailsFetch()
    reviewsFetch()
  }
  
  const profileFetch = () => {
    fetch(profileURL, {
      method: 'GET', 
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
      },
    })
    .then(response => response.json())
    .then(result => setUser(result))
  }

  const trailsFetch = () => {
    fetch(trailsURL, {
      method: 'GET', 
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
      },
    })
    .then(response => response.json())
    .then(result => setAllTrails(result))
  }

  const reviewsFetch = () => {
    fetch(reviewsURL, {
      method: 'GET', 
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
      },
    })
    .then(response => response.json())
    .then(result => setAllReviews(result))
  }


  const login = (user) => {
    return fetch(loginURL, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(result => {
      (result.detail === 'No active account found with the given credentials')
        ? window.location.reload()
        : localStorage.setItem('token', result.access)
    })
  }

  return (
    <div className="App">
      <Switch>

        <PrivateRoute
          exact path='/'
          user={user}
          allTrails={allTrails}
          allReviews={allReviews}
          profileFetch={profileFetch}
          fetchModels={fetchModels}
        />
        <Route
          path='/login'
          render={(props) => <Login {...props} login={login} /> } 
        />
        <Route render={() => <Redirect to='/' />} />

      </Switch>
      <SignUp path='/signup'/>

    </div>
  );
}

export default App;