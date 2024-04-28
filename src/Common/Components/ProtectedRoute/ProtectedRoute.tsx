import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../App";

function ProtectedRoute({ children }: any) {
  const { auth } = useContext(AuthContext);
  // let user = false;
  console.log("ProtectedRoute", auth);
  if (!auth) {
    return <Navigate to="/weather/login" />;
  }
  return children;
}

export default ProtectedRoute;
