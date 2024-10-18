import { useForm } from "react-hook-form";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";

export const Form = () => {
	useForm();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<h2 className="font-bold p-4 font-secondary">Log in or Sign up.</h2>
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
						required: "E,mail is required",
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
							message: "Password must be at least 8 symols",
						},
					}}
					error={errors.password}
				/>
				<div className="w-full flex justify-between">
					<Button type="submit">Sign In</Button>
					<Button type="button">Sign Up</Button>
				</div>
			</form>
		</div>
	);
};
