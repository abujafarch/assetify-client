import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [hrCompany, setHrCompany] = useState(true)

    const axiosSecure = useAxiosSecure()
    const [employee, setEmployee] = useState(false)
    const [hr, setHr] = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const profileUpdate = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user: ', currentUser);
            setUser(currentUser)

            //making decision that if user is true then user is hr or employee
            if (currentUser) {
                axiosSecure.get(`/user?email=${user?.email}`)
                    .then(res => {
                        res.data.role === 'employee' && setEmployee(true)
                        res.data.role === 'hr' && setHr(true)
                        if (hr) {
                            'hello'
                            axiosSecure.get(`/company/${user.email}`)
                                .then(res => {
                                    console.log(res.data);
                                    setHrCompany(res.data)
                                    console.log(hrCompany);
                                    setLoading(false)
                                })
                        }
                    })
            }
            else if (!currentUser) {
                axiosSecure.get(`/user?email=${user?.email}`)
                    .then(res => {
                        res.data.role === 'employee' && setEmployee(false)
                        res.data.role === 'hr' && setHr(false)
                        setLoading(false)
                    })
            }
            //setting loading false

        })
        return () => {
            unSubscribe()
        }
    }, [auth, axiosSecure, user, hr])

    const authInfo = { createUser, profileUpdate, loading, user, logOut, login, employee, hr, setEmployee, setHr, hrCompany }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log('current user from authState:', currentUser);

    //         const userEmail = currentUser?.email || user?.email;
    //         const loggedUser = { email: userEmail };

    //         if (updateProfile) {
    //             setUser(currentUser)
    //             setUpdateProfile(false)
    //         }
    //         setUser(currentUser)
    //         setLoading(false)
    //         if (currentUser) {
    //             axios.post('https://wisdom-server.vercel.app/jwt', loggedUser, { withCredentials: true })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //         }
    //         else {
    //             axios.post('https://wisdom-server.vercel.app/logout', loggedUser, { withCredentials: true })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //         }
    //     })
    //     return () => {
    //         unSubscribe()
    //     }
    // }, [auth, updateProfile, user])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;