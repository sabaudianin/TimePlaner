import { useCallback } from "react";
import { toast } from "react-toastify";
import { useAuthDispatch } from "../context/authorization/Authorization";
import { getWeek } from "./getWeek";

export const useSignUpForm = () => {
	const { login } = useAuthDispatch();

	const handleSignUp = useCallback(
		async ({ email, password }) => {
			const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
			const isUserExist = existingUsers.some((user) => user.email === email);

			if (isUserExist) {
				toast.error("User already exists, please log in.", {
					theme: "colored",
				});
			} else {
				const newUser = {
					email,
					password,
					points: 0,
					weekPoints: 0,
					weekPointsCompleted: 0,
					lastWeekUpdate: getWeek(),
					tasks: {
						MON: [],
						TUE: [],
						WEN: [],
						THR: [],
						FRI: [],
						SAT: [],
						SUN: [],
					},
				};

				localStorage.setItem(
					"users",
					JSON.stringify([...existingUsers, newUser])
				);

				const token = "fakeToken";
				await login(newUser, token);
				toast.success("Account created! You are now logged in.", {
					theme: "colored",
				});
			}
		},
		[login]
	);

	return { handleSignUp };
};
