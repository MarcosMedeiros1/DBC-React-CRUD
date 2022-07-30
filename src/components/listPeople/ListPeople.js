import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { PeopleContext } from "../../context/PeopleContext";
import { ButtonPrimary, ButtonSecondary, DefaultButton } from "../button/Button";
import Modal from "../modal/Modal";
import { ContainerList, List, ListHeader, ListItem, TitleList, Ul } from "./ListPeople.styled"

const ListPeople = ({ list }) => {
  const { handleDelete, confirmDelete, navigateUpdate, isModalVisible, setIsModalVisible } = useContext(PeopleContext);
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/cadastrar-pessoa');
  }

  return (
    <ContainerList>
      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      <TitleList>
        <h2>Pessoas</h2>
        <ButtonPrimary type="button" onClick={handleCreate} padding={"12px 24px"}>Cadastrar pessoa</ButtonPrimary>
      </TitleList>

      <List>
        <ListHeader>
          <span>Nome</span>
          <span>Data de nascimento</span>
          <span>CPF</span>
          <span>Email</span>
          <span>Ações</span>
        </ListHeader>
        <Ul>
          {list.map(item => (
            <ListItem key={item.idPessoa}>
              <span>{item.nome}</span>
              <span>{item.dataNascimento.split("-").reverse().join("/")}</span>
              <span>{item.cpf}</span>
              <span>{item.email}</span>

              <div>
                <DefaultButton type="button" hoverColor={"#F12B2C"} onClick={() => handleDelete(item.idPessoa)}>
                  <FaTrashAlt />
                </DefaultButton>


                <DefaultButton type="button" hoverColor={"#f39c12"} onClick={() => navigateUpdate(item.idPessoa)}>
                  <FaUserEdit />
                </DefaultButton >

                <ButtonSecondary type="button" padding={"6px 12px"}>Endereços</ButtonSecondary>
              </div>
            </ListItem>
          ))
          }
        </Ul>
      </List>
    </ContainerList>
  )
}
export default ListPeople;