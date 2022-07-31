import { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsCardText } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";
import { ButtonSecondary, DefaultButton } from "../button/Button";
import { ContainerList, List, ListItem, ListAdd } from "../list/List";
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
            <ListItem key={item.idEndereco}>
              <div>
                <span><strong>Tipo: </strong>{item.tipo}</span>
                <div>
                  <DefaultButton type="button" hoverColor={"#F12B2C"} onClick={() => handleDelete(item.idEndereco)}>
                    <FaTrashAlt />
                  </DefaultButton>

                  <DefaultButton type="button" hoverColor={"#f39c12"} onClick={() => navigateUpdate(item.idEndereco)}>
                    <FaEdit />
                  </DefaultButton >
                </div>
              </div>

              <span><strong>Logradouro: </strong>{item.logradouro}</span>
              <span><strong>Número: </strong>{item.numero}</span>
              <span><strong>Complemento: </strong>{item.complemento}</span>
              <span><strong>CEP: </strong>{item.cep}</span>
              <span><strong>Cidade: </strong>{item.cidade}</span>
              <span><strong>Estado: </strong>{item.estado}</span>
              <span><strong>País: </strong>{item.pais}</span>
            </ListItem>
          ))
          }
        </ul>
      </List>
    </ContainerList >
  );
}

export default ListAddress;