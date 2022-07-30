import { createContext, useEffect, useState } from "react";
import { apiDbc } from "../api";
import { Loading } from "../components/loading/Loading";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      apiDbc.defaults.headers.common["Authorization"] = token;
      setAuth(true);
    }
    setLoading(false);
  }, [])

  const handleLogin = async (values) => {
    try {
      const { data } = await apiDbc.post("/auth", values);

      localStorage.setItem("token", data);
      apiDbc.defaults.headers.common["Authorization"] = data;
      setAuth(true);
      window.location.href = '/pessoas'
    } catch (error) {
      console.log(error);
      alert("Login ou senha incorretos");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    apiDbc.defaults.headers.common["Authorization"] = undefined;
    setAuth(false);
    window.location.href = '/'
  };

  const handleRegister = async (values) => {
    try {
      await apiDbc.post('/auth/create', values);
      alert('Cadastrado com sucesso')
      window.location.href = '/';
    } catch (error) {
      alert(error)
    }
  }

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleLogout, handleRegister, auth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
