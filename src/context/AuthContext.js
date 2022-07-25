import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    const { data } = await api.post("/auth", user);

    localStorage.setItem("token", data);
    setAuth(true);
    navigate("/user");
  };

  return (
    <AuthContext.Provider value={{ auth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
