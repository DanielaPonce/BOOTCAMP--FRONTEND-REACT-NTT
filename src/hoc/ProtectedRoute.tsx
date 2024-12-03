import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { RoutesConstants } from '../utils/routes';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const { isAuthenticated, isLoading } = useAuth();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isAuthenticated) {
		return <Navigate to={RoutesConstants.Login} replace />;
	}

	return children;
};

export default ProtectedRoute;
