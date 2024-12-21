import { NavLink } from "react-router-dom";
import { memo } from "react";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${s.link} ${s.authLink}` : s.link;

  return (
    <div className={s.authNavCon}>
      <NavLink to="/register" className={getNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        Login
      </NavLink>
    </div>
  );
};

export default memo(AuthNav);
