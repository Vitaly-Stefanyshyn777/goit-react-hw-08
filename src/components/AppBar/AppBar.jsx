import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectUserAuthStatus } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isAuthenticated = useSelector(selectUserAuthStatus);

  return (
    <header className={s.headerBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
