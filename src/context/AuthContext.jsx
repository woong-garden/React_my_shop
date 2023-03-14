import { createContext, useContext, useState, useEffect } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState(() => {return readUserFromLocalStorage()});

    useEffect(() => {
        onUserStateChange((user) => {
            setUser(user);
        })
    },[])

    //로컬스토리지에 저장
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    },[user])

    return <AuthContext.Provider value={{ user, uid:user && user.uid, login: login, logout: logout }}>
                {children}
            </AuthContext.Provider>
}

//로컬스토리지 사용
function readUserFromLocalStorage() {
    const userInfo = localStorage.getItem('user')
    return userInfo ? JSON.parse(userInfo) : null
}


export function useAuthContext() {
    return useContext(AuthContext);
}