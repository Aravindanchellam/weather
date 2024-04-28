import React, { createContext, useState } from "react";
import "./App.css";
import MainRouter from "./Router";
import { useNavigate } from "react-router-dom";

export interface IAuth {
  auth: boolean;
  logIn: any;
}

export const AuthContext = createContext<IAuth>({
  auth: false,
  logIn: () => {},
});

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<any>(false);
  const value = { auth, setAuth };

  const logIn = () => {
    console.log("hello");
    setAuth((prevState: any) => ({
      ...prevState,
      auth: true,
    }));
    navigate("/weather");
  };

  return (
    <AuthContext.Provider value={{ ...value, logIn }}>
      <MainRouter />
    </AuthContext.Provider>
  );
}

export default App;
