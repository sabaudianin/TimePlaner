export const Button = ({ type, children, ...props }) => (
	<button
		type={type}
		className="bg-yellow-500 py-4 rounded font-bold px-6 hover:bg-yellow-800 hover:text-white transition duration-300"
		{...props}
	>
		{children}
	</button>
);
