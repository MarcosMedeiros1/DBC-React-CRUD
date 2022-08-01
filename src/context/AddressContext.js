import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { apiDbc } from "../api";
import { Loading } from "../components/loading/Loading";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState([]);
  const [idAddress, setIdAddress] = useState([]);
  const [idPerson, setIdPerson] = useState("");
  const [loading, setLoading] = useState(true);

  const getAddress = async (id) => {
    setIdPerson(id);
    try {
      const { data } = await apiDbc.get(`/endereco/retorna-por-id-pessoa?idPessoa=${id}`);
      setAddress(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível encontrar endereços");
    }
  }

  useEffect(() => {
    idPerson ? getAddress() : setLoading(false);
  }, [])

  const handleCreate = async (values) => {
    try {
      await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${values.idPessoa}`, values);
      toast.success("Endereço cadastrado com sucesso");
      setTimeout(() => { window.location.href = `/enderecos/${values.idPessoa}` }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos");
    }
  }

  const navigateUpdate = (idAddress) => {
    window.location.href = `/editar-endereco/${idPerson}/${idAddress}`;
  }

  const handleUpdate = async (values, idAddress, idPerson) => {
    try {
      await apiDbc.put(`/endereco/${idAddress}`, values);
      toast.success("Atualizado com sucesso");
      setTimeout(() => { window.location.href = `/enderecos/${idPerson}` }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar o endereço");
    }
  }

  const handleDelete = (idAddress) => {
    setIsModalVisible(true);
    setIdAddress(idAddress);
  }

  const confirmDelete = async () => {
    try {
      await apiDbc.delete(`/endereco/${idAddress}`);
      setIsModalVisible(false);
      toast.success("Endereço deletado com sucesso");
      getAddress(idPerson);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível deletar o endereço");
    }
  }

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <>
      <Toaster />
      <AddressContext.Provider value={{
        address,
        getAddress,
        handleCreate,
        handleDelete,
        confirmDelete,
        isModalVisible,
        setIsModalVisible,
        setIdPerson,
        navigateUpdate,
        handleUpdate
      }}>{children}</AddressContext.Provider>
    </>
  )
}

export { AddressContext, AddressProvider }