import { useForm } from "react-hook-form";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { useAuthDispatch } from "../context/authorization/Authorization";

export const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const { login } = useAuthDispatch();

	const onSubmit = (data) => {
		const { email, password } = data;
		//check users exist or not
		const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
		const isUsersExist = existingUsers.some((user) => {
			user.email === email;
		});

		if (isUsersExist) {
			alert("user already Exist , please log in");
		} else {
			const newUser = {
				email,
				password,
				points: 0,
				weekPoints: 0,
				weekPointsCompleted: 0,
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

			login(newUser, token);
			alert("account Createed! Logged iN");
		}
	};

	return (
		<div>
			<h2 className="font-bold p-4 font-secondary">Create Account</h2>
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
						maxLength: {
							value: 24,
							message: "Password too long, max 24 symbols",
						},
					}}
					error={errors.password}
				/>
				<Input
					register={register}
					name="rePassword"
					type="password"
					placeholder="Repeat password *"
					validation={{
						required: "Please repeat your password",
						validate: (value) =>
							value === watch("password") || "Passwords do not match",
					}}
					error={errors.rePassword}
				/>
				<div className="w-full flex justify-between">
					<Button type="submit">Sign Up</Button>
				</div>
			</form>
		</div>
	);
};
