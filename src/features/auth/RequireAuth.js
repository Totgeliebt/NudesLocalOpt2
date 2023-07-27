import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const isLoggedIn = useSelector((state) => state?.auth.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/landing" state={{ from: location }} replace />
  );
};
export default RequireAuth;
