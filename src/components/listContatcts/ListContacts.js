import { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsCardText } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { ButtonSecondary, DefaultButton } from "../button/Button";
import { ContainerList, List, ListItem, ListAdd, Info } from "../list/List";
import Modal from "../modal/Modal";
import { ContactsContext } from "../../context/ContactsContext";

const ListContacts = ({ list, id }) => {
  const { handleDelete, confirmDelete, navigateUpdate, isModalVisible, setIsModalVisible } = useContext(ContactsContext);
  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate(`/cadastrar-contato/${id}`);
  }

  if (list.length === 0) {
    return (
      <ContainerList>

        <ListAdd>
          <ButtonSecondary type="button" onClick={navigateCreate} padding={"12px 24px"} fontSize={"1rem"}>Cadastrar contato <BsCardText /></ButtonSecondary>
        </ListAdd>

        <h2>Nenhum contato cadastradado</h2>
      </ContainerList>
    )
  }

  return (
    <ContainerList>

      <ListAdd>
        <ButtonSecondary type="button" onClick={navigateCreate} padding={"12px 24px"} fontSize={"1rem"}>Cadastrar contato <BsCardText /></ButtonSecondary>
      </ListAdd>

      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      <List>
        <ul>
          {list.map(item => (
            <ListItem key={item.idContato} columns={"repeat(3, 1fr)"}>
              <Info><strong>Telefone: </strong>{item.telefone}</Info>
              <Info><strong>Tipo: </strong>{item.tipoContato}</Info>
              <Info><strong>Descrição: </strong>{item.descricao}</Info>

              <div>
                <DefaultButton type="button" hoverColor={"#F12B2C"} onClick={() => handleDelete(item.idContato)}>
                  <FaTrashAlt />
                </DefaultButton>

                <DefaultButton type="button" hoverColor={"#f39c12"} onClick={() => navigateUpdate(item.idContato)}>
                  <FaEdit />
                </DefaultButton >
              </div>

            </ListItem>
          ))
          }
        </ul>
      </List>
    </ContainerList >
  );
}

export default ListContacts;