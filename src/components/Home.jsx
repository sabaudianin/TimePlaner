import { Button } from "../elements/Button";
import { Link } from "react-router-dom";
import { WeekList } from "./WeekList";
import { Statistics } from "./Statistics";

export const Home = () => {
	return (
		<section className="h-[90vh] w-full bg-blue-200 flex flex-col lg:flex-row items-center ">
			<WeekList />

			<div className=" lg:w-[70%] h-[100%] lg:h-full flex bg-pink-200 flex-nowrap">
				<Statistics />
			</div>
		</section>
	);
};
