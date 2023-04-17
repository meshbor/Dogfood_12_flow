import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export const Footer = () => {

  const user = useContext(UserContext);

  return (
    <div className='container'>
 footer
 {user.name}
    </div>
  );
};
