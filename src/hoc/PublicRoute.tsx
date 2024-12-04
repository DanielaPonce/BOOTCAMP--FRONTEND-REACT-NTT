// falta test
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { RoutesConstants } from '../utils/routes';

const PublicRoute: React.FC<PropsWithChildren> = ({ children }) => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return <Navigate to={RoutesConstants.Home} replace />;
	}

	return children;
};

export default PublicRoute;
