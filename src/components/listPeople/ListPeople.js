import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaUserEdit, FaUserPlus } from 'react-icons/fa';
import { PeopleContext } from "../../context/PeopleContext";
import { ButtonSecondary, DefaultButton } from "../button/Button";
import Modal from "../modal/Modal";
import { ContainerList, List, ListItem, ListAdd } from "../list/List"
import { FormatDateUsaToBr } from "../../utils/utils";

const ListPeople = ({ list }) => {
  const { handleDelete, confirmDelete, navigateUpdate, isModalVisible, setIsModalVisible } = useContext(PeopleContext);

  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate('/cadastrar-pessoa');
  }

  const navigateAddress = (id) => {
    navigate(`/enderecos/${id}`)
  }

  if (list.length === 0) {
    return (
      <ContainerList>

        <ListAdd>
          <ButtonSecondary type="button" onClick={navigateCreate} padding={"12px 24px"} fontSize={"1rem"}>Cadastrar pessoa <FaUserPlus /></ButtonSecondary>
        </ListAdd>

        <h2>Nenhuma pessoa cadastrada</h2>
      </ContainerList>
    )
  }

  return (
    <ContainerList>
      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      <ListAdd>
        <ButtonSecondary type="button" onClick={navigateCreate} padding={"12px 24px"} fontSize={"1rem"}>Cadastrar pessoa <FaUserPlus /></ButtonSecondary>
      </ListAdd>

      <List>
        <ul>
          {list.map(item => (
            <ListItem key={item.idPessoa}>
              <span><strong>Nome: </strong> {item.nome}</span>
              <span><strong>Data de nascimento: </strong>{FormatDateUsaToBr(item.dataNascimento)}</span>
              <span><strong>CPF: </strong>{item.cpf}</span>
              <span><strong>Email: </strong>{item.email}</span>

              <div>
                <DefaultButton type="button" hoverColor={"#F12B2C"} onClick={() => handleDelete(item.idPessoa)}>
                  <FaTrashAlt />
                </DefaultButton>

                <DefaultButton type="button" hoverColor={"#f39c12"} onClick={() => navigateUpdate(item.idPessoa)}>
                  <FaUserEdit />
                </DefaultButton >

                <ButtonSecondary type="button" padding={"6px 12px"} fontSize={"14px"} onClick={() => navigateAddress(item.idPessoa)}>Endereços</ButtonSecondary>
              </div>
            </ListItem>
          ))
          }
        </ul>
      </List>
    </ContainerList>
  )
}

export default ListPeople;