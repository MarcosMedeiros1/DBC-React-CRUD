import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Address from "./pages/address/Address";
import Login from "./pages/login/Login";
import People from "./pages/people/People";
import Users from "./pages/users/Users";
import NotFound from "./pages/notFound/NotFound";
import FormPeople from "./pages/people/FormPeople";

const Routers = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!auth ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/usuarios" element={<Users />} />
            </>
          ) : (
            <>
              <Route path="/pessoas" element={<People />} />
              <Route path="/endereco" element={<Address />} />
              <Route path="/cadastrar-pessoa" element={<FormPeople />} />
              <Route path="/editar-pessoa/:id" element={<FormPeople />} />
            </>)}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routers;
