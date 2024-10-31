import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { useAuthState } from "../context/authorization/Authorization";

export const AppLayout = () => {
	const { isAuthenticated } = useAuthState();
	return (
		<>
			<NavBar />
			<section className="max-w-screen-xl text-center mx-auto  min-h-[85vh] ">
				{isAuthenticated ? <Outlet /> : <Login />}
			</section>

			<Footer />
		</>
	);
};
