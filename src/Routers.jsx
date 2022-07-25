import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login/Login";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Routers;
