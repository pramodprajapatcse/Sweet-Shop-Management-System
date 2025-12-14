import React from 'react';
import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService';

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  return authService.isLoggedIn()
    ? <>{children}</>
    : <Navigate to="/login" />;
};

export default PrivateRoute;
