import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { PeopleContext } from "../../context/PeopleContext";
import { ButtonPrimary, ButtonSecondary, DefaultButton } from "../button/Button";
import Modal from "../modal/Modal";
import { ContainerList, List, ListItem, ListTitle } from "../list/List"
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

  return (
    <ContainerList>
      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      <ListTitle>
        <h2>Pessoas</h2>
        <ButtonPrimary type="button" onClick={navigateCreate} padding={"12px 24px"}>Cadastrar pessoa</ButtonPrimary>
      </ListTitle>

      <List>
        <ul>
          {list.map(item => (
            <ListItem display={"grid"} key={item.idPessoa}>
              <span>Nome: {item.nome}</span>
              <span>Data de nascimento: {FormatDateUsaToBr(item.dataNascimento)}</span>
              <span>CPF: {item.cpf}</span>
              <span>Email: {item.email}</span>

              <div>
                <DefaultButton type="button" hoverColor={"#F12B2C"} onClick={() => handleDelete(item.idPessoa)}>
                  <FaTrashAlt />
                </DefaultButton>

                <DefaultButton type="button" hoverColor={"#f39c12"} onClick={() => navigateUpdate(item.idPessoa)}>
                  <FaUserEdit />
                </DefaultButton >

                <ButtonSecondary type="button" padding={"6px 12px"} onClick={() => navigateAddress(item.idPessoa)}>Endereços</ButtonSecondary>
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