import { createContext, useState } from "react";
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
      handleDelete,
      confirmDelete,
      isModalVisible,
      setIsModalVisible,
    }}>{children}</AddressContext.Provider>
  )
}

export { AddressContext, AddressProvider }