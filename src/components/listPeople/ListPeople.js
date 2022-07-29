import { useContext } from "react";
import { PeopleContext } from "../../context/PeopleContext";
import { ButtonSecondary } from "../button/Button";
import Modal from "../modal/Modal";
import { ContainerList, List, ListHeader, ListItem } from "./ListPeople.styled"

const ListPeople = ({ list }) => {
  const { handleDelete, confirmDelete, handleUpdate, isModalVisible, setIsModalVisible } = useContext(PeopleContext);

  return (
    <ContainerList>
      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      <List>
        <ListHeader>
          <span>Nome</span>
          <span>Data de nascimento</span>
          <span>CPF</span>
          <span>Email</span>
          <span>Ações</span>
        </ListHeader>
        {list.map(item => (
          <ListItem key={item.idPessoa}>
            <span>{item.nome}</span>
            <span>{item.dataNascimento}</span>
            <span>{item.cpf}</span>
            <span>{item.email}</span>

            <div>
              <ButtonSecondary type="button" padding={"6px 8px"} onClick={() => handleDelete(item.idPessoa)}>Excluir</ButtonSecondary>

              <ButtonSecondary type="button" padding={"6px 8px"} onClick={() => handleUpdate(item.idPessoa)}>Editar</ButtonSecondary >
            </div>
          </ListItem>
        ))
        }
      </List>
    </ContainerList>
  )
}
export default ListPeople;