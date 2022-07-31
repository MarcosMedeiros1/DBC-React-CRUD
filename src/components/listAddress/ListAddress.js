import { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";
import { ButtonPrimary, DefaultButton } from "../button/Button";
import { ContainerList, List, ListItem, ListTitle } from "../list/List";
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
        <ul>
          {list.map(item => (
            <ListItem display={"flex"} key={item.idEndereco}>
              <span>Tipo: {item.tipo}</span>
              <span>Logradouro: {item.logradouro}</span>
              <span>Número: {item.numero}</span>
              <span>Complemento: {item.complemento}</span>
              <span>CEP: {item.cep}</span>
              <span>Cidade: {item.cidade}</span>
              <span>Estado: {item.estado}</span>
              <span>País: {item.pais}</span>

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