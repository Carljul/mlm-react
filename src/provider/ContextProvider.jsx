import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: {
        name: null,
        email: null,
        cellphone_number: null,
        genealogy_invitation_code: null,
        role_id: null,
        id: null,
        avatar: null,
        person: {
            firstname: null,
            middlename: null,
            lastname: null,
            suffix: null,
            fullname: null,
            civil_status: null,
            gender: null,
            birthdate: null
        }
    },
    token: null,
    setUser: (data) => {},
    setToken: (token) => {}
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(StateContext.user);
    const [token, _setToken] = useState();

    const setToken = (token) => {
        _setToken(token);

        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);