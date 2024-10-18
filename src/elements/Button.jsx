export const Button = ({ type, children }) => (
	<button
		type={type}
		className="bg-yellow-500 py-4 rounded font-bold px-6 hover:bg-yellow-800 hover:text-white transition duration-300"
	>
		{children}
	</button>
);
