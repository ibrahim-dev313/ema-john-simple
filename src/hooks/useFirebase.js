import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";




const useFirebase =()=>{
    const [user, setUser]=useState({})

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()


    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)
        })
        // .catch()
    }

    const logout =()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }


    // observe whether user auth changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return {
        user,
        signInUsingGoogle,
        logout,

    }

}

export default useFirebase;