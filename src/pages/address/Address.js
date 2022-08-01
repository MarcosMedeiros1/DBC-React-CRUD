import { useContext, useEffect } from "react";
import ListAddress from "../../components/listAddress/ListAddress";
import { Container } from "../../components/container/Container";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";

const Address = () => {
  const { id } = useParams();
  const { getAddress, address } = useContext(AddressContext);

  useEffect(() => {
    getAddress(id);
  }, [])

  return (
    <Container>
      <Header display={'inline'} page={"Endereços"} />
      <div>
        <ListAddress list={address} id={id} />
      </div>
    </Container>
  )
}

export default Address;