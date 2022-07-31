import { createContext, useEffect, useState } from "react";
import { apiDbc } from "../api";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState([]);
  const [idAddress, setIdAddress] = useState([]);
  const [idPerson, setIdPerson] = useState("");

  const getAddress = async (id) => {
    setIdPerson(id);
    try {
      const { data } = await apiDbc.get(`/endereco/retorna-por-id-pessoa?idPessoa=${id}`);
      setAddress(data);
      return data;
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    idPerson && getAddress();
  }, [])

  const handleCreate = async (values) => {
    try {
      await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${values.idPessoa}`, values);
      alert("Endereço cadastrado com sucesso");
      window.location.href = `/enderecos/${values.idPessoa}`;
    } catch (error) {
      alert(error);
    }
  }

  const navigateUpdate = (idAddress) => {
    window.location.href = `/editar-endereco/${idPerson}/${idAddress}`;
  }

  const handleUpdate = async (values, idAddress, idPerson) => {
    try {
      await apiDbc.put(`/endereco/${idAddress}`, values);
      window.location.href = `/enderecos/${idPerson}`;
    } catch (error) {
      alert(error)
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
      alert("Endereço deletado com sucesso");
      getAddress(idPerson);
    } catch (error) {
      alert(error)
    }
  }

  return (
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
  )
}

export { AddressContext, AddressProvider }