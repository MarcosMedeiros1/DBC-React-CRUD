import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { StyledNotFound } from './NotFound.styled';

const NotFound = () => {
  const { auth } = useContext(AuthContext);

  return (
    auth ? window.location.href = "/pessoas" :
      <StyledNotFound>
        <h1>No easter eggs here.</h1>
        <Link to='/'>Fazer login</Link>
      </StyledNotFound>
  )
}

export default NotFound;