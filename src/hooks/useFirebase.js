import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from '../Firebase/firebase.init'

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    console.log(setUser);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        console.log('cliked')
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result?.user);
            // console.log("from",user)
        
        })
       
    }

    // Observe user state changed
    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        })
        return () => unsubscribed;
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then(() =>{})
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;