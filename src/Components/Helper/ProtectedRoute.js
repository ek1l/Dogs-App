import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo }) => {
  const { login } = React.useContext(UserContext);
  return login ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
