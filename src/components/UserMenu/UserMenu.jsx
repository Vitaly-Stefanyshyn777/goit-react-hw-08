// import { useDispatch, useSelector } from "react-redux";
// import { logOut } from "../../redux/auth/operations";
// import { selectUser } from "../../redux/auth/selectors";
// import s from "./UserMenu.module.css";

// export const UserMenu = () => {

//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   return (
//     <div className={s.wrapper}>
//       {user && user.name ? (
//         <>
//       <p className={s.username}>Welcome, {user.name}</p>
//       <button type="button" onClick={() => dispatch(logOut())}>
//         Logout
//       </button>
//       </>
//       ) : <p>Loading user data...</p>
//     }
//     </div>
//   );
// };
// export default UserMenu;

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser, selectUserAuthStatus } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isUserAuthenticated = useSelector(selectUserAuthStatus);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  if (!isUserAuthenticated) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button type="button" className={s.logoutBtn} onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
