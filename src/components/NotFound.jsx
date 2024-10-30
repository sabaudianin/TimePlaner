import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="h-[100vh] w-full flex justify-center items-center flex-col">
			<p>Page not Found.</p>

			<Link to="/"> Click to Back home.</Link>
		</div>
	);
};
