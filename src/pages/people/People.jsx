import { useContext } from "react";
import ListPeople from "../../components/listPeople/ListPeople";
import { PeopleContext } from "../../context/PeopleContext";
import { Container } from "../../components/container/Container";
import Aside from "../../components/aside/Aside";

const People = () => {
  const { pessoas } = useContext(PeopleContext);

  return (
    <Container>
      <Aside />
      <div>
        <ListPeople list={pessoas} />
      </div>
    </Container>
  )
}

export default People;