import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};
ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
