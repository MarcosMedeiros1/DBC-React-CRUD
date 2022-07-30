import { createContext, useContext, useEffect, useState } from "react";
import { apiDbc } from "../api";
import { Loading } from "../components/loading/Loading";
import { AuthContext } from "./AuthContext";

const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idPessoa, setIdPessoa] = useState("");
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

  const handleCreate = async (values) => {
    try {
      await apiDbc.post(`/pessoa`, values);
      alert('Pessoa cadastrada com sucesso');
      window.location.href = '/pessoa';
    } catch (error) {
      alert(error)
    }
  }

  const handleDelete = (idPessoa) => {
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

  const navigateUpdate = (idPessoa) => {
    window.location.href = `/editar-pessoa/${idPessoa}`
  }

  const handleUpdate = async (values, idPessoa) => {
    try {
      await apiDbc.put(`/pessoa/${idPessoa}`, values)
      window.location.href = '/pessoa';
    } catch (error) {
      alert(error)
    }
  }

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <PeopleContext.Provider value={{
      handleDelete,
      confirmDelete,
      handleUpdate,
      navigateUpdate,
      handleCreate,
      isModalVisible,
      setIsModalVisible,
      pessoas,
    }}>
      {children}
    </PeopleContext.Provider>
  )
}

export { PeopleContext, PeopleProvider };