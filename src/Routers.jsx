import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { AuthProvider } from "./context/AuthContext";
import Address from "./pages/address/Address";
import Login from "./pages/login/Login";
import People from "./pages/people/People";
import Users from "./pages/users/Users";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/endereco" element={<Address />} />
            <Route path="/pessoas" element={<People />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Routers;
