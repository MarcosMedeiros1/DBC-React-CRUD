import { createContext, useEffect, useState } from "react";
import { apiDbc } from "../api";

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

  const handleRegister = async (link, values, type, method) => {
    if (method === "post") {
      try {
        await apiDbc.post(link, values);

        alert(`${type} cadastrado(a) com sucesso`)

        if (type === "Usuário") {
          window.location.href = '/'
        }
      } catch (error) {
        alert(error);
      }
    }

    if (method === "put") {
      try {
        await apiDbc.put(link, values);

        alert(`${type} editado(a) com sucesso`)
      } catch (error) {
        alert(error);
      }
    }
  };

  if (loading) {
    return (<h1>Carregando...</h1>)
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
