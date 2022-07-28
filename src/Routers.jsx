import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Address from "./pages/address/Address";
import Login from "./pages/login/Login";
import People from "./pages/people/People";
import Users from "./pages/users/Users";
import NotFound from "./pages/notFound/NotFound"


const Routers = () => {
  const { auth } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {!auth ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/usuarios" element={<Users />} />
            </>
          ) : (
            <>
              <Route path="/endereco" element={<Address />} />
              <Route path="/pessoas" element={<People />} />
            </>)}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routers;
