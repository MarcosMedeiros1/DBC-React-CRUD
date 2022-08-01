import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
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
      console.log(error);
      toast.error("Não foi possível encontrar pessoas");
    }
  }

  useEffect(() => {
    auth ? setup() : setLoading(false);
  }, [])

  const handleCreate = async (values) => {
    try {
      await apiDbc.post(`/pessoa`, values);
      toast.success('Pessoa cadastrada com sucesso');
      window.location.href = '/pessoa';
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos");
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
      toast.success("Pessoa deletada com sucesso");
      setup();
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível deletar a pessoa");
    }
  }

  const navigateUpdate = (idPessoa) => {
    window.location.href = `/editar-pessoa/${idPessoa}`
  }

  const handleUpdate = async (values, idPessoa) => {
    try {
      await apiDbc.put(`/pessoa/${idPessoa}`, values)
      window.location.href = '/pessoas';
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar a pessoa");
    }
  }

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <>
      <Toaster />
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
    </>
  )
}

export { PeopleContext, PeopleProvider };