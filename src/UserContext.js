import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('Everyone needs a <br> once in a while!');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
