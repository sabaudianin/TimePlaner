import { Link } from "react-router-dom";
import {
	useAuthState,
	useAuthDispatch,
} from "../context/authorization/Authorization";

export const NavBar = () => {
	const { isAuthenticated, user } = useAuthState();
	const { logout } = useAuthDispatch();

	return (
		<nav className="p-4 h-[5vh] flex justify-between w-full shadow-xl items-center text-xl">
			<div>
				<Link to="/">
					<i className="fa-regular fa-face-smile-wink text-xl lg:text-4xl text-orange-500 "></i>
				</Link>
			</div>
			{isAuthenticated ? (
				<ul className="flex space-x-4 items-center font-extrabold text-xs lg:text-base">
					<li className="text-secondary border-b-4 hover:border-blue-500 ">
						<Link to="/">Home</Link>
					</li>
					<li className="text-primary border-b-4 hover:border-red-500 ">
						<Link to="/tasks">Tasks</Link>
					</li>
					<li className="text-third border-b-4 hover:border-green-500">
						<Link to="/awards">Awards</Link>
					</li>
				</ul>
			) : null}
			<div className="flex items-center font-bold text-xs lg:text-base">
				<p>{user ? `${user.email} ` : "Time Planer"}</p>
				{isAuthenticated && (
					<button onClick={logout}>
						<i className="fa-solid fa-right-from-bracket text-xl ml-2"></i>
					</button>
				)}
			</div>
		</nav>
	);
};
