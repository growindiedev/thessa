import React, {createContext ,useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'
import 'firebase/firestore'
import 'firebase/auth'


export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
  }

export const AuthContextProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState(null)
const [loading, setLoading] = useState(true)

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
    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

  },[])

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
            {!loading && children}
        </AuthContext.Provider>
    )
}


