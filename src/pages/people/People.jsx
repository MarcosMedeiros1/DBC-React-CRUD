import { useContext } from "react";
import { ButtonPrimary } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import ListPeople from "../../components/listPeople/ListPeople";
import { PeopleContext } from "../../context/PeopleContext";

const People = () => {
  const navigate = useNavigate();
  const { pessoas } = useContext(PeopleContext);

  const handleCreate = () => {
    navigate('/cadastrar-pessoa');
  }

  return (
    <div>
      <ButtonPrimary type="button" onClick={handleCreate} padding={"8px 24px"}>Cadastrar</ButtonPrimary>
      <ListPeople list={pessoas} />
    </div >
  )
}

export default People;