import { useContext } from "react";
import { PeopleContext } from "../../context/PeopleContext";
import { ButtonSecondary } from "../button/Button";
import Modal from "../modal/Modal";

const ListPeople = ({ list }) => {
  const { handleDelete, confirmDelete, handleUpdate, isModalVisible, setIsModalVisible } = useContext(PeopleContext);

  return (
    <div>
      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { confirmDelete() }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>}

      {list.map(item => (
        <div key={item.idPessoa}>
          <p>Nome: {item.nome}</p>
          <p>Data de nascimento: {item.dataNascimento}</p>
          <p>CPF: {item.cpf}</p>
          <p>Email: {item.email}</p>

          <ButtonSecondary type="button" padding={"6px 8px"} onClick={() => handleDelete(item.idPessoa)}>Excluir</ButtonSecondary>

          <ButtonSecondary type="button" padding={"6px 8px"} onClick={() => handleUpdate(item.idPessoa)}>Editar</ButtonSecondary >
        </div>
      ))
      }
    </div >
  )
}
export default ListPeople;