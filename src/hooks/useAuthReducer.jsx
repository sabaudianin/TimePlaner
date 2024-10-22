import { useReducer, useCallback, useEffect } from "react";

const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				token: action.payload.token,
			};

		case "LOGOUT":
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
			};

		default:
			return state;
	}
};

export const useAuthReducer = (initialState) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = useCallback(
		(user, token) => {
			dispatch({
				type: "LOGIN",
				payload: {
					user,
					token,
				},
			});
		},
		[dispatch]
	);

	const logout = useCallback(() => {
		dispatch({ type: "LOGOUT" });
		localStorage.removItem("user");
		localStorage.removeItem("token");
	}, [dispatch]);

	//Restore after refreshing the page
	useEffect(() => {
		const token = localStorage.getItem("token");
		const user = localStorage.getItem("user");

		if (token && user) {
			login(JSON.parse(user), token);
		}
	}, [login]);

	return { state, login, logout };
};
