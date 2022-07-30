import { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";
import { ButtonPrimary, DefaultButton } from "../button/Button";
import { ContainerList, List, ListHeader, ListItem, ListTitle } from "../list/List";
import Modal from "../modal/Modal";

const ListAddress = ({ list, id }) => {
  const { handleDelete, confirmDelete, navigateUpdate, isModalVisible, setIsModalVisible } = useContext(AddressContext);
  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate(`/cadastrar-endereco/${id}`);
  }

  return (
    <ContainerList>

      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      <ListTitle>
        <h2>Endereços</h2>
        <ButtonPrimary type="button" onClick={navigateCreate} padding={"12px 24px"}>Cadastrar endereço</ButtonPrimary>
      </ListTitle>

      <List>
        <ListHeader>
          <span>Tipo</span>
          <span>Logradouro</span>
          <span>Número</span>
          <span>Complemento</span>
          <span>CEP</span>
          <span>Cidade</span>
          <span>Estado</span>
          <span>País</span>
        </ListHeader>
        <ul>
          {list.map(item => (
            <ListItem key={item.idEndereco}>
              <span>{item.tipo}</span>
              <span>{item.logradouro}</span>
              <span>{item.numero}</span>
              <span>{item.cep}</span>
              <span>{item.cidade}</span>
              <span>{item.estado}</span>
              <span>{item.pais}</span>

              <div>
                <DefaultButton type="button" hoverColor={"#F12B2C"} onClick={() => handleDelete(item.idEndereco)}>
                  <FaTrashAlt />
                </DefaultButton>

                <DefaultButton type="button" hoverColor={"#f39c12"} onClick={() => navigateUpdate(item.idEndereco)}>
                  <FaEdit />
                </DefaultButton >
              </div>
            </ListItem>
          ))
          }
        </ul>
      </List>
    </ContainerList>
  );
}

export default ListAddress;