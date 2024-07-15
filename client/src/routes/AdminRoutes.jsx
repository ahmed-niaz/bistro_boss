import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loader from "./../components/shared/Loader";
import PropTypes from 'prop-types'

const AdminRoutes = ({ children }) => {
  const [isAdmin, adminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || adminLoading) return <Loader />;

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

AdminRoutes.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AdminRoutes;
