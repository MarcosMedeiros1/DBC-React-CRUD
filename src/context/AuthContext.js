import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiDbc } from "../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const { data } = await apiDbc.post("/auth", values);

      localStorage.setItem("token", data);
      setAuth(true);
      navigate("/pessoas");

      alert("Login realizado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Login ou senha incorretos");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSignUp = async (link, values, type) => {
    try {
      const { data } = await apiDbc.post(link, values);
      navigate("/");
      alert(`${type} cadastrado com sucesso`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, handleLogin, handleLogout, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
