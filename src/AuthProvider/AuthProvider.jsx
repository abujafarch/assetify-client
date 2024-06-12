import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [hrCompany, setHrCompany] = useState()

    const axiosSecure = useAxiosSecure()
    const [employee, setEmployee] = useState(false)
    const [hr, setHr] = useState(false)
    const [employeeInfo, setEmployeeInfo] = useState()

    const { isLoading: rolePending } = useQuery({
        queryKey: ['roleData'],
        enabled: user ? true : false,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user?.email}`)
            res.data.role === 'employee' && setEmployee(true)
            res.data.role === 'hr' && setHr(true)
            return 'roleData'
        },
    })

    const { isLoading: hrCompanyPending, refetch: hrCompanyRefetch } = useQuery({
        queryKey: ['hrCompany'],
        enabled: hr,
        queryFn: async () => {
            const res = await axiosSecure.get(`/company/${user.email}`)
            setHrCompany(res.data)
            return 'hrCompany'
        },
    })

    const { isLoading: userInfoPending, refetch: userInfoRefetch } = useQuery({
        queryKey: ['employeeInfo'],
        enabled: employee,
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee-info/${user.email}`)
            setEmployeeInfo(res.data)
            return 'employeeInfo'
        },
    })

    const pendingState = (rolePending || hrCompanyPending || userInfoPending)
    // console.log(employeeInfo)

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
            setLoading(false)

            if (!currentUser) {
                setLoading(false)
                setHr(false)
                setEmployee(false)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [auth, axiosSecure, user, hr, employee])

    const authInfo = { createUser, profileUpdate, loading, user, logOut, login, employee, hr, setEmployee, setHr, hrCompany, pendingState, hrCompanyRefetch, userInfoRefetch, employeeInfo }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;