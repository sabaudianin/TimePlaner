export const Input = ({
	register,
	name,
	type,
	placeholder,
	validation,
	error,
}) => (
	<div className="w-full">
		<input
			className={`p-4 rounded border-2 w-full ${
				error ? "border-red-500" : "border-yellow-500"
			}`}
			{...register(name, validation)}
			type={type}
			placeholder={placeholder}
		/>
		{error && <p className="text-red-500 mt-1">{error.message}</p>}
	</div>
);
