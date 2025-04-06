// import React from "react";
// import { Loading } from '../components/Loading'
// // import { createContext, useContext, useEffect, useState } from 'react'
// import { createContext, useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// const LoginContext = createContext()

// export const useLogin = () => useContext(LoginContext)

// export const LoginProvider = ({ children }) => {
//   const [loggedIn, setLoggedIn] = useState(true)
//   const [user, setUser] = useState(null)
//   const navigate = useNavigate()

//   useEffect(() => {
//     try {
//       const token = localStorage.getItem("token"); // ✅ No JSON.parse()
//       if (token) {
//         const currentTime = Date.now() / 1000
//         if (token.exp + 2 * 60 < currentTime) {
//           localStorage.removeItem('token')
//           setLoggedIn(false)
//         } else {
//           setLoggedIn(true)
//           setUser(token)
//         }
//       } else {
//         setLoggedIn(false)
//       }
//     } catch (e) {
//       localStorage.removeItem('token')
//       console.log(e)
//     }
//   }, [loggedIn])

//   const login = (token) => {
//     localStorage.setItem("token", token);  // Store token as a plain string
//     setLoggedIn(true);
//   };


//   const logout = () => {
//     localStorage.removeItem("token")
//     setLoggedIn(false)
//     setUser(null)
//     navigate('/login')
//   }
//   if (loggedIn && !user) {
//     return (
//       <div className="flex h-screen w-full items-center justify-center">
//         <Loading />
//       </div>
//     )
//   }

//   return (
//     <LoginContext.Provider value={{ loggedIn, login, logout, user }}>
//       {children}
//     </LoginContext.Provider>
//   )
// }

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("token");
          setLoggedIn(false);
          setUser(null);
        } else {
          setLoggedIn(true);
          setUser(decodedToken); // Store decoded user data
        }
      } else {
        setLoggedIn(false);
      }
    } catch (e) {
      localStorage.removeItem("token");
      console.error("Error decoding token:", e);
      setLoggedIn(false);
    }
  }, []); // ✅ Run only on mount

  const login = (token) => {
    localStorage.setItem("token", token);
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT
    setUser(decodedToken);
    setLoggedIn(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    navigate("/login");
  };

  if (loggedIn && !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout, user }}>
      {children}
    </LoginContext.Provider>
  );
};
