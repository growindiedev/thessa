import React, {createContext ,useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {


function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}
    
function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}
    
function logout() {
    return auth.signOut()
}
    
function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
}
    
function updateEmail(email) {
    return currentUser.updateEmail(email)
}
    
function updatePassword(password) {
    return currentUser.updatePassword(password)
}

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => useContext(AuthContext)