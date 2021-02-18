import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../context'

export  function PrivateRoute({ component: Component, children, ...rest }) {
    const { currentUser } = useAuth()
  
    return (
        <Route
          {...rest}
          render={props => {
            return !!currentUser  ? <Component {...props} />: <Redirect to={"/login"} />
          }}
          
        ></Route>
      )
  }


  // export function PrivateRoute({ user, children, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={({ location }) => {
  //         if (user) {
  //           return children;
  //         }
  
  //         if (!user) {
  //           return (
  //             <Redirect
  //               to={{
  //                 pathname: 'login',
  //                 state: { from: location },
  //               }}
  //             />
  //           );
  //         }
  
  //         return null;
  //       }}
  //     />
  //   );
  // }