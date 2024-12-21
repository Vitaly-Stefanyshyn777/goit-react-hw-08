import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthStatus } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isAuthenticated = useSelector(selectUserAuthStatus);

  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
