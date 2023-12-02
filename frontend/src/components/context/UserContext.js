
import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();

function UserProvider({children}){

    const {authenticated, register, logout, login, isAuth} = useAuth();

    return(
        <Context.Provider value={{authenticated, register, logout, login, isAuth}}> 
            {children}
        </Context.Provider>
    )
};

export {Context, UserProvider};


