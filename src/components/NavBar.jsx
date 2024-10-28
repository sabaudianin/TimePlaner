import { Link } from "react-router-dom";
import {
	useAuthState,
	useAuthDispatch,
} from "../context/authorization/Authorization";

export const NavBar = () => {
	const { isAuthenticated, user } = useAuthState();
	const { login, logout } = useAuthDispatch();

	return (
		<nav className="p-4 h-[5vh] flex justify-between w-full shadow-xl items-center">
			<div>
				<Link to="/">
					<i className="fa-regular fa-face-smile-wink text-4xl text-orange-500 "></i>
				</Link>
			</div>
			{isAuthenticated ? (
				<ul className="flex space-x-4 items-center">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/tasks">Tasks</Link>
					</li>
					<li>
						<Link to="/awards">Awards</Link>
					</li>
				</ul>
			) : null}
			<div className="flex items-center">
				<p>{user ? `${user.email} ` : "Witaj nieznajomy"}</p>
				{isAuthenticated && (
					<button onClick={logout}>
						<i className="fa-solid fa-right-from-bracket text-xl ml-2"></i>
					</button>
				)}
			</div>
		</nav>
	);
};
