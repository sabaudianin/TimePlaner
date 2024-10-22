import { Button } from "../elements/Button";
import { Link } from "react-router-dom";
import { WeekList } from "./WeekList";
import { Statistics } from "./Statistics";
import { useAuthState } from "../context/authorization/Authorization";

export const Home = () => {
	const { isAuthenticated, user } = useAuthState();
	return (
		<section className="h-[90vh] w-full bg-blue-200 flex flex-col lg:flex-row items-center ">
			<WeekList />
			<div className=" lg:w-[70%] h-[100%] lg:h-full flex bg-pink-200 flex-nowrap">
				<Statistics />
			</div>
			<p>TASKI:{user.email}</p>
			Text{" "}
			{user.tasks.map((task) => (
				<p key={task.id}>{task.text}</p>
			))}
		</section>
	);
};
