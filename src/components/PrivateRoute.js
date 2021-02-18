import React from 'react'
import HomePage from './HomePage'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute(props){
    const {user, profileFetch, allTrails, allReviews, leaveReview, deleteReview, editReview, fetchModels} = props

    return <Route {...props} render={(routerProps) => {
        return localStorage.token
        ? <HomePage
            {...routerProps}
            user={user}
            profileFetch={profileFetch}
            allTrails={allTrails}
            allReviews={allReviews}
            leaveReview={leaveReview}
            deleteReview={deleteReview}
            editReview={editReview}
            fetchModels={fetchModels}
        />
        : <Redirect to='/login' />
    }} />
}