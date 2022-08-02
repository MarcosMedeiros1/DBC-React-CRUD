import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import { Container } from "../../components/container/Container";
import Header from "../../components/header/Header";
import ListContacts from "../../components/listContatcts/ListContacts";

const Contacts = () => {
  const { id } = useParams();
  const { contacts, getContacts } = useContext(ContactsContext);

  useEffect(() => {
    getContacts(id);
  }, [])

  return (
    <Container>
      <Header display={"inline"} page={"Pessoas"} />

      <div>
        <ListContacts list={contacts} id={id} />
      </div>

    </Container>
  )
}
export default Contacts;