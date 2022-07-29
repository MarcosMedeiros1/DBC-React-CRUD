import { createContext, useContext, useEffect, useState } from "react";
import { apiDbc } from "../api";
import { Loading } from "../components/loading/Loading";
import { AuthContext } from "./AuthContext";

const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idPessoa, setIdPessoa] = useState("");
  const [method, setMethod] = useState("post");
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(AuthContext);

  const setup = async () => {
    try {
      const { data } = await apiDbc.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
      setPessoas(data.content);
      setLoading(false);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    auth ? setup() : setLoading(false);
  }, [])

  const handleDelete = async (idPessoa) => {
    setIsModalVisible(true);
    setIdPessoa(idPessoa);
  }

  const confirmDelete = async () => {
    try {
      await apiDbc.delete(`/pessoa/${idPessoa}`);
      setIsModalVisible(false);
      alert("Pessoa deletada com sucesso");
      setup();
    } catch (error) {
      alert(error)
    }
  }

  const handleUpdate = (idPessoa) => {
    setMethod("put");
    window.location.href = `/editar-pessoa/${idPessoa}`
  }

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <PeopleContext.Provider value={{ handleDelete, confirmDelete, handleUpdate, isModalVisible, setIsModalVisible, method, setMethod, pessoas }}>
      {children}
    </PeopleContext.Provider>
  )
}

export { PeopleContext, PeopleProvider };