import { createContext, useEffect, useState } from "react";
import { apiDbc } from "../api";
import toast, { Toaster } from 'react-hot-toast';
import { Loading } from "../components/loading/Loading";

const ContactsContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idPerson, setIdPerson] = useState("");
  const [idContact, setIdContact] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getContacts = async (id) => {
    setIdPerson(id);
    try {
      const { data } = await apiDbc.get(`/contato/${id}`);
      setContacts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível encontrar contatos");
    }
  }

  useEffect(() => {
    idPerson ? getContacts() : setLoading(false);
  }, [])

  const handleCreate = async (values, idPerson) => {
    console.log("aqui");

    try {
      console.log("ali");
      await apiDbc.post(`/contato/${idPerson}`, values);
      toast.success("Contato cadastrado com sucesso");
      setTimeout(() => { window.location.href = `/contatos/${idPerson}` }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos");
    }
  }

  const navigateUpdate = (idContact) => {
    window.location.href = `/editar-contato/${idPerson}/${idContact}`;
  }

  const handleUpdate = async (values, idContact, idPerson) => {
    try {
      await apiDbc.put(`/contato/${idContact}`, values);
      toast.success("Atualizado com sucesso");
      setTimeout(() => { window.location.href = `/contatos/${idPerson}` }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar o contato");
    }
  }

  const handleDelete = (idContact) => {
    setIsModalVisible(true);
    setIdContact(idContact);
  }

  const confirmDelete = async () => {
    try {
      await apiDbc.delete(`/contato/${idContact}`)
      setIsModalVisible(false);
      toast.success("Contato deletado com sucesso");
      getContacts(idPerson);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível deletar o contato");
    }

  }

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <>
      <Toaster />
      <ContactsContext.Provider value={{
        contacts,
        getContacts,
        handleCreate,
        navigateUpdate,
        handleUpdate,
        handleDelete,
        confirmDelete,
        isModalVisible,
        setIsModalVisible
      }}>
        {children}
      </ContactsContext.Provider>
    </>
  )
}

export { ContactsContext, ContactProvider };