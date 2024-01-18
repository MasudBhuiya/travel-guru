// import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export  const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}
const register = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user =>{
        setUser(user);
        setLoading(false);
    })

    return () => {
        return unsubscribe;
    }
},[auth])

    const authInfo = {
        user, loading, googleSignIn, register, login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;