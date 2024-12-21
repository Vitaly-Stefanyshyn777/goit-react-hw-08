import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthStatus } from "../../redux/auth/selectors";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isUserAuthenticated = useSelector(selectUserAuthStatus);

  // Якщо користувач не автентифікований, перенаправити на сторінку логіну
  return isUserAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
