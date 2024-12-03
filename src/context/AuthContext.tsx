import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useState
} from 'react';
import { loginRequest } from '../api/authentication.api';
import { storageUtils } from '../utils/storageUtils';

interface AuthContextProps {
	isAuthenticated: boolean;
	user: string | null;
	isLoading: boolean;
	login: (username: string, password: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const storedUser = storageUtils.getUser();
		if (storedUser) {
			setIsAuthenticated(true);
			setUser(storedUser);
		}
		setIsLoading(false);
	}, []);

	const login = async (username: string, password: string) => {
		try {
			const loginData = await loginRequest(username, password);
			setIsAuthenticated(true);
			setUser(loginData.username);
			storageUtils.setUser(loginData.username);
		} catch (error) {
			setIsAuthenticated(false);
			setUser(null);
			console.log(error);
			throw new Error(
				error instanceof Error ? error.message : 'Login failed'
			);
		}
	};

	const logout = () => {
		setIsAuthenticated(false);
		setUser(null);
		storageUtils.clearUser();
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, user, isLoading, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
