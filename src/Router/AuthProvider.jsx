import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Config/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const AuthInfo = {
        users,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;