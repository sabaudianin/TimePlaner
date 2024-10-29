import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { useSignUpForm } from "../hooks/useSignUpForm";

export const SignUpForm = ({ toggleVisible }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const { handleSignUp } = useSignUpForm();

	const onSubmit = async (data) => {
		await handleSignUp(data);
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
					<Button type="button" onClick={toggleVisible}>
						Sign In
					</Button>
					<Button type="submit">Sign Up</Button>
				</div>
			</form>
		</div>
	);
};

SignUpForm.propTypes = {
	toggleVisible: PropTypes.func.isRequired,
};
