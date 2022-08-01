import { useContext } from "react";
import ListPeople from "../../components/listPeople/ListPeople";
import { PeopleContext } from "../../context/PeopleContext";
import { Container } from "../../components/container/Container";
import Header from "../../components/header/Header";

const People = () => {
  const { pessoas } = useContext(PeopleContext);

  return (
    <Container>
      <Header display={"none"} page={"Pessoas"} />
      <div>
        <ListPeople list={pessoas} />
      </div>
    </Container>
  )
}

export default People;