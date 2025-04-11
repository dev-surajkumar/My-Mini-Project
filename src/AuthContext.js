import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('username')));

    const loginUser = (userName) => {
        setUsername(userName);
        setIsLoggedIn(true);
        localStorage.setItem('username', userName);
    };

    const logoutUser = () => {
        setUsername('');
        setIsLoggedIn(false);
        localStorage.removeItem('username');
    };

    return (
        <AuthContext.Provider value={{ username, isLoggedIn, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
