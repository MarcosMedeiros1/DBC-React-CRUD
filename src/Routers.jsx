import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./pages/address/Address";
import Login from "./pages/login/Login";
import People from "./pages/people/People";
import Users from "./pages/users/Users";
import NotFound from "./pages/notFound/NotFound";
import FormPeople from "./pages/people/FormPeople";
import FormAddress from "./pages/address/FormAddress";

const Routers = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!auth ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/cadastrar-usuario" element={<Users />} />
            </>
          ) : (
            <>
              <Route path="/pessoas" element={<People />} />
              <Route path="/cadastrar-pessoa" element={<FormPeople />} />
              <Route path="/editar-pessoa/:id" element={<FormPeople />} />

              <Route path="/enderecos/:id" element={<Address />} />
              <Route path="/cadastrar-endereco/:idPerson" element={<FormAddress />} />
              <Route path="/editar-endereco/:idPerson/:idAddress" element={<FormAddress />} />
            </>)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
