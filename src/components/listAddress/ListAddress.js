import { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";
import { ButtonPrimary, DefaultButton } from "../button/Button";
import { ContainerList, InfoAddress, List, ListItem, ListTitle } from "../list/List";
import Modal from "../modal/Modal";

const ListAddress = ({ list, id }) => {
  const { handleDelete, confirmDelete, navigateUpdate, isModalVisible, setIsModalVisible } = useContext(AddressContext);
  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate(`/cadastrar-endereco/${id}`);
  }

  return (
    <ContainerList>

      <ListTitle>
        <h2>Endereços</h2>
        <ButtonPrimary type="button" onClick={navigateCreate} padding={"12px 24px"}>Cadastrar endereço</ButtonPrimary>
      </ListTitle>


      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      <List>
        <ul>
          {list.map(item => (
            <ListItem key={item.idEndereco} columns={"repeat(1, 1fr)"}>
              <div>
                <InfoAddress><strong>Tipo: </strong>{item.tipo}</InfoAddress>
                <div>
                  <DefaultButton type="button" hoverColor={"#F12B2C"} onClick={() => handleDelete(item.idEndereco)}>
                    <FaTrashAlt />
                  </DefaultButton>

                  <DefaultButton type="button" hoverColor={"#f39c12"} onClick={() => navigateUpdate(item.idEndereco)}>
                    <FaEdit />
                  </DefaultButton >
                </div>
              </div>

              <InfoAddress><strong>Logradouro: </strong>{item.logradouro}</InfoAddress>
              <InfoAddress><strong>Número: </strong>{item.numero}</InfoAddress>
              <InfoAddress><strong>Complemento: </strong>{item.complemento}</InfoAddress>
              <InfoAddress><strong>CEP: </strong>{item.cep}</InfoAddress>
              <InfoAddress><strong>Cidade: </strong>{item.cidade}</InfoAddress>
              <InfoAddress><strong>Estado: </strong>{item.estado}</InfoAddress>
              <InfoAddress><strong>País: </strong>{item.pais}</InfoAddress>
            </ListItem>
          ))
          }
        </ul>
      </List>
    </ContainerList >
  );
}

export default ListAddress;