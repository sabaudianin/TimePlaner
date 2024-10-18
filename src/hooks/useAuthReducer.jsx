import { useReducer, useCallback } from "react";

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
	}, [dispatch]);

	return { state, login, logout };
};
