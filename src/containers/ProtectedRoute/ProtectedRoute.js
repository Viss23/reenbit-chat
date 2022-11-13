import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ currentUserId }) => {
  return currentUserId ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUser.id,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
