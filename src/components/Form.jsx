import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { useLoginForm } from "../hooks/useLoginForm";

export const Form = ({ toggleVisible }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { handleLogin } = useLoginForm();

	return (
		<div>
			<h2 className="font-bold p-4 font-secondary">Log in</h2>
			<form
				onSubmit={handleSubmit(handleLogin)}
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
							console.log("Sign Up b");
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

Form.propTypes = {
	toggleVisible: PropTypes.func.isRequired,
};
