import {
	useState,
	useEffect,
	useContext,
	createContext,
	useMemo,
	useCallback,
	useReducer,
} from "react";

import { useAuthReducer } from "../../hooks/useAuthReducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const AuthorizationProvider = ({ children }) => {
	const initialState = {
		isAuthenticated: false,
		user: null,
		token: null,
	};
	const { state, login, logout } = useAuthReducer(initialState);
	return (
		<AuthStateContext.Provider value={state}>
			<AuthDispatchContext.Provider value={{ login, logout }}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
};

export const useAuthState = () => {
	const context = useContext(AuthStateContext);
	if (context === undefined) {
		throw new Error(
			"useAuthState only can be used inside AuthorizationProvider "
		);
	}
	return context;
};
export const useAuthDispatch = () => {
	const context = useContext(AuthDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useAuthDispatch only can be used inside AuthorizationProvider "
		);
	}
	return context;
};

// const AuthorizationContext = createContext();

// export const AuthorizationProvider = ({ children }) => {

// 	const [auth, setAuth] = useState(false);
// 	const login = useCallback(() => {
// 		setAuth(true);
// 	}, []);
// 	const logout = useCallback(() => {
// 		localStorage.removeItem("authToken");
// 		setAuth(false);
// 	}, []);

// 	useEffect(() => {
// 		const savedAuth = localStorage.getItem("authToken");
// 		if (savedAuth) {
// 			setAuth(true);
// 		}
// 	}, []);

// 	const authValue = useMemo(
// 		() => ({
// 			auth,
// 			login,
// 			logout,
// 		}),
// 		[auth, login, logout]
// 	);

// 	return (
// 		<AuthorizationContext.Provider value={authValue}>
// 			{children}
// 		</AuthorizationContext.Provider>
// 	);
// };

// export const useAuthorization = () => {
// 	return useContext(AuthorizationContext);
// };
