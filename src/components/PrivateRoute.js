import React from 'react'
import HomePage from './HomePage'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute(props){
    const {user, profileFetch, allTrails} = props

    return <Route {...props} render={(routerProps) => {
        return localStorage.token
        ? <HomePage
            {...routerProps}
            user={user}
            profileFetch={profileFetch}
            allTrails={allTrails}
        />
        : <Redirect to='/login' />
    }} />
}