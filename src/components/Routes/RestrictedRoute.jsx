import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectUserAuthStatus,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

const RestrictedRoute = ({ children, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectUserAuthStatus);

  const isRefreshing = useSelector(selectIsRefreshing);
  if (isRefreshing) return <div>Loading...</div>;
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
