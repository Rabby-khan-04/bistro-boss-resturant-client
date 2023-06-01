import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useAdmin } from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading, logOutUser } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  } else if (user && isAdmin?.admin) {
    return children;
  }

  logOutUser();
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default AdminRoutes;
