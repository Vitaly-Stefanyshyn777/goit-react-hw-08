// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import s from "./Navigation.module.css";

// export const Navigation = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <nav>
//       <NavLink className={s.link} to="/">
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink className={s.link} to="/contacts">
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };
//  export default Navigation;
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectUserAuthStatus } from "../../redux/auth/selectors"; // Заміна селектора
// import s from "./Navigation.module.css";

// const Navigation = () => {
//   const isUserAuthenticated = useSelector(selectUserAuthStatus);

//   return (
//     <nav>
//       <NavLink className={s.link} to="/">
//         Home
//       </NavLink>
//       {isUserAuthenticated && (
//         <NavLink className={s.link} to="/contacts">
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };

// export default Navigation;

// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectUserAuthStatus } from "../../redux/auth/selectors"; // Селектор для перевірки автентифікації
// import s from "./Navigation.module.css";

// const Navigation = () => {
//   const isUserAuthenticated = useSelector(selectUserAuthStatus);

//   return (
//     <nav className={s.navigation}>
//       <NavLink className={s.link} to="/">
//         Home
//       </NavLink>

//       {isUserAuthenticated && (
//         <NavLink className={s.link} to="/contacts">
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };

// // export default Navigation;
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectUserAuthStatus } from "../../redux/auth/selectors"; // Заміна селектора
// import s from "./Navigation.module.css";

// const Navigation = () => {
//   const isUserAuthenticated = useSelector(selectUserAuthStatus);

//   return (
//     <nav>
//       <NavLink className={s.link} to="/">
//         Home
//       </NavLink>
//       {isUserAuthenticated && (
//         <NavLink className={s.link} to="/contacts">
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
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
