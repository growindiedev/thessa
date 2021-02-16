import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../context'

export  function PrivateRoute({ component: Component, children, ...rest }) {
    const { currentUser } = useAuth()
  
    return (
        <Route
          {...rest}
          render={props => {
            return currentUser  ? <Component {...props} />: <Redirect to="/login" />
          }}
        >{currentUser && children}</Route>
      )
  }
