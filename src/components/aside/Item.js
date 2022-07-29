import { Link } from "react-router-dom";


const Item = ({ name, url, click }) => {
  return (
    <li onClick={click}>
      <Link to={url}>{name}</Link>
    </li>
  );
};

export default Item;
