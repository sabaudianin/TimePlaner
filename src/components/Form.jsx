import { useForm } from "react-hook-form";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { useAuthDispatch } from "../context/authorization/Authorization";

export const Form = ({ toggleVisible }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { login } = useAuthDispatch();

	const onSubmit = (data) => {
		const { email, password } = data;

		const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
		const findThisUser = existingUsers.find(
			(user) => user.email === email && user.password === password
		);

		if (findThisUser) {
			const token = "fakeToken";

			//Save user to local storage
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(findThisUser));
			//Logging in
			login(findThisUser, token);
			alert("Login Succesed");
		} else {
			alert("Invalid email or password");
		}
	};

	return (
		<div>
			<h2 className="font-bold p-4 font-secondary">Log in</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center items-center gap-4 shadow-md p-16"
			>
				<Input
					register={register}
					name="email"
					type="email"
					placeholder="Email *"
					validation={{
						required: "Email is required",
						validate: (value) => value.includes("@") || "Email must contain @",
					}}
					error={errors.email}
				/>
				<Input
					register={register}
					name="password"
					type="password"
					placeholder="Password *"
					validation={{
						required: "Password is required",
						minLength: {
							value: 8,
							message: "Password must be at least 8 symbols",
						},
					}}
					error={errors.password}
				/>
				<div className="w-full flex justify-between">
					<Button type="submit">Sign In</Button>

					<Button
						type="button"
						onClick={() => {
							console.log("Sign Up button clicked");
							toggleVisible();
						}}
					>
						Sign Up
					</Button>
				</div>
			</form>
		</div>
	);
};
