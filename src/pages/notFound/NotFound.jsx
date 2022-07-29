import { useContext } from 'react';
import { GiAncientSword } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { StyledNotFound } from './NotFound.styled';

const NotFound = () => {
  const { auth } = useContext(AuthContext);

  return (
    auth ? window.location.href = "/pessoas" : <StyledNotFound>
      <div>
        <GiAncientSword />
        <span>No easter eggs here. Go away</span>
      </div>
      <Link to='/'>Fazer login</Link>
    </StyledNotFound>
  )
}
export default NotFound;