import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const token = useSelector((state) => state.user.user.authToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/landing" state={{ from: location }} replace />
  );
};
export default RequireAuth;
