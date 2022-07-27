import { BsFillBugFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <BsFillBugFill style={{ fontSize: 40 }} />
    </Link>
  );
};
export default Logo;
