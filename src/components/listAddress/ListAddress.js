import { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsCardText } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";
import { ButtonSecondary, DefaultButton } from "../button/Button";
import { ContainerList, List, ListItem, ListAdd, Info } from "../list/List";
import Modal from "../modal/Modal";

const ListAddress = ({ list, id }) => {
  const { handleDelete, confirmDelete, navigateUpdate, isModalVisible, setIsModalVisible } = useContext(AddressContext);
  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate(`/cadastrar-endereco/${id}`);
  }

  if (list.length === 0) {
    return (
      <ContainerList>

        <ListAdd>
          <ButtonSecondary type="button" onClick={navigateCreate} padding={"12px 24px"} fontSize={"1rem"}>Cadastrar endereço <BsCardText /></ButtonSecondary>
        </ListAdd>

        <h2>Nenhum endereço cadastradado</h2>
      </ContainerList>
    )
  }

  return (
    <ContainerList>

      <ListAdd>
        <ButtonSecondary type="button" onClick={navigateCreate} padding={"12px 24px"} fontSize={"1rem"}>Cadastrar endereço <BsCardText /></ButtonSecondary>
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
            <ListItem key={item.idEndereco} columns={"repeat(3, 1fr)"}>
              <Info><strong>Logradouro: </strong>{item.logradouro}</Info>
              <Info><strong>Número: </strong>{item.numero}</Info>
              <Info><strong>Complemento: </strong>{item.complemento}</Info>
              <Info><strong>CEP: </strong>{item.cep}</Info>
              <Info><strong>Cidade: </strong>{item.cidade}</Info>
              <Info><strong>Estado: </strong>{item.estado}</Info>
              <Info><strong>País: </strong>{item.pais}</Info>
              <Info><strong>Tipo: </strong>{item.tipo}</Info>

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
    </ContainerList >
  );
}

export default ListAddress;