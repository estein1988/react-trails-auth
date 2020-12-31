import React from 'react'
import HomePage from './HomePage'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute(props){
    const {user, profileFetch, allTrails, allReviews, fetchModels} = props

    return <Route {...props} render={(routerProps) => {
        return localStorage.token
        ? <HomePage
            {...routerProps}
            user={user}
            profileFetch={profileFetch}
            allTrails={allTrails}
            allReviews={allReviews}
            fetchModels={fetchModels}
        />
        : <Redirect to='/login' />
    }} />
}