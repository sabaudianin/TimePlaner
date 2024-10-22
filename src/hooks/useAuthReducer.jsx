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

		case "UPDATE_USER":
			return {
				...state,
				user: {
					...state.user,
					...action.payload.user,
				},
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
			localStorage.setItem("user", JSON.stringify(user));
			localStorage.setItem("token", token);
		},
		[dispatch]
	);

	const logout = useCallback(() => {
		dispatch({ type: "LOGOUT" });
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	}, [dispatch]);

	const updateUser = useCallback((updatedUserData) => {
		dispatch({
			type: "UPDATE_USER",
			payload: { user: updatedUserData },
		});
		localStorage.setItem("user", JSON.stringify(updatedUserData));
	}, []);

	//Restore after refreshing the page
	useEffect(() => {
		try {
			const token = localStorage.getItem("token");
			const user = localStorage.getItem("user");

			if (token && user && !state.isAuthenticated) {
				login(JSON.parse(user), token);
			}
		} catch (error) {
			console.error("Error parsing user data from localStorage", error);
			// Remove data when corupted
			localStorage.removeItem("user");
			localStorage.removeItem("token");
		}
	}, [login]);

	return { state, login, logout, updateUser };
};
