import { Link } from "react-router-dom";
import {
	useAuthState,
	useAuthDispatch,
} from "../context/authorization/Authorization";

export const NavBar = () => {
	const { isAuthenticated, user } = useAuthState();
	const { login, logout } = useAuthDispatch();

	return (
		<nav className="p-4 h-[5vh] flex justify-between w-full shadow-xl">
			<div>
				<svg
					className="h-8 w-8 text-red-500"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{" "}
					<path stroke="none" d="M0 0h24v24H0z" />{" "}
					<circle cx="12" cy="12" r="9" />{" "}
					<line x1="9" y1="10" x2="9.01" y2="10" />{" "}
					<line x1="15" y1="10" x2="15.01" y2="10" />{" "}
					<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />{" "}
					<path d="M12 3a2 2 0 0 0 0 4" />
				</svg>
			</div>
			{isAuthenticated ? (
				<ul className="flex space-x-4">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/tasks">Tasks</Link>
					</li>
					<li>
						<Link to="/plan">Plan</Link>
					</li>
				</ul>
			) : null}

			<button onClick={isAuthenticated ? logout : login}>
				{user ? `Witaj ${user.email}` : "Witaj nieznajomy"}
			</button>
		</nav>
	);
};
