import { useAuthDispatch } from "../context/authorization/Authorization";
import { toast } from "react-toastify";

export const useLoginForm = () => {
	const { login } = useAuthDispatch();

	const handleLogin = (data) => {
		const { email, password } = data;
		const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
		const findThisUser = existingUsers.find(
			(user) => user.email === email && user.password === password
		);

		if (findThisUser) {
			const token = "fakeToken";
			login(findThisUser, token);
			toast.success("Login succeeded", { theme: "colored" });
		} else {
			toast.error("Invalid email or password", { theme: "colored" });
		}
	};

	return { handleLogin };
};
