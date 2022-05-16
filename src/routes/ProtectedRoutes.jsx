import { useLocation, Navigate, Outlet } from "react-router-dom";
import { userUserState } from "../store/userStore";

const ProtectRoute = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = userUserState((state) => state.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={(path = location.pathname)} />
  );
};

export default ProtectRoute;





































































































