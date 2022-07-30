import { useContext, useEffect } from "react";
import ListAddress from "../../components/listAddress/ListAddress";
import { Container } from "../../components/container/Container";
import Aside from "../../components/aside/Aside";
import { useParams } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";

const People = () => {
  const { id } = useParams();
  const { getAddress, address } = useContext(AddressContext);

  useEffect(() => {
    getAddress(id);
  }, [])


  return (
    <Container>
      <Aside />
      <div>
        <ListAddress list={address} id={id} />
      </div>
    </Container>
  )
}

export default People;