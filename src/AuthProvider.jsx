import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const navigate = useNavigate();
    const location = useLocation();
  
    const createUser = async (name, email, password, photoUrl) => {
      setLoading(true);
  
      setLoading(false);
    };
  
    const signIn = async (email, password) => {
      setLoading(true);
  
      const res = await axios.post(
        `http://localhost:5000/users/signin`,
        {user,
          email,
          password,
        },
        { validateStatus: false }
      );
  
      if (res.status === 200) {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setToken(res.data.token);
        // navigate(location?.state?.redirectTo || "/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "Invalid email or password. Please try again.",
        });
      }
  
      setLoading(false);
    };
  
    const signOut = () => {
      setLoading(false);
      setUser(null);
      setToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    };

    // useEffect(() => {
    //     if (signUp) {
    //       navigate(location.state?.redirectTo || '/users/signin');
    //     }
    //   }, [signUp]);
  
    useEffect(() => {
        if (loading) {
          // navigate(location.state?.redirectTo || '/users/signin');
        }
      }, [loading]);

    useEffect(() => {
      try {
        const json = localStorage.getItem("user");
        if (json) {
          const userDataFromLocalStorage = JSON.parse(json);
          if (userDataFromLocalStorage) {
            setUser(userDataFromLocalStorage);
          }
        }
  
        const json2 = localStorage.getItem("token");
        if (json2) {
          const userDataFromLocalStorage2 = JSON.parse(json2);
          if (userDataFromLocalStorage2) {
            setToken(userDataFromLocalStorage2);
          }
        }
      } catch (ex) {
        console.log(ex);
      }
    }, []);
  
    const authInfo = {
      user,
      token,
      loading,
      createUser,
      signIn,
      signOut,
    };
  
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
      );

  };
  
  export default AuthProvider;
  