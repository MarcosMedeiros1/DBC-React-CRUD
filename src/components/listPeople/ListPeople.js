import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PeopleContext } from "../../context/PeopleContext";
import { ButtonPrimary, ButtonSecondary } from "../button/Button";
import Modal from "../modal/Modal";
import { ContainerList, List, ListHeader, ListItem, TitleList, Ul } from "./ListPeople.styled"

const ListPeople = ({ list }) => {
  const { handleDelete, confirmDelete, handleUpdate, isModalVisible, setIsModalVisible } = useContext(PeopleContext);
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

      <List>
        <TitleList>
          <h2>Pessoas</h2>
          <ButtonPrimary type="button" onClick={handleCreate} padding={"6px 8px"}>Cadastrar</ButtonPrimary>
        </TitleList>
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
                <ButtonSecondary type="button" padding={"6px 8px"} onClick={() => handleDelete(item.idPessoa)}>Excluir</ButtonSecondary>

                <ButtonSecondary type="button" padding={"6px 8px"} onClick={() => handleUpdate(item.idPessoa)}>Editar</ButtonSecondary >
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