import { useState } from "react";
import { Button } from "../elements/Button";
import { Link } from "react-router-dom";
import { WeekList } from "./WeekList";
import { Statistics } from "./Statistics";
import { useAuthState } from "../context/authorization/Authorization";

export const Home = () => {
	const { isAuthenticated, user } = useAuthState();
	const [selectedDay, setSelectedDay] = useState("MON");

	const handleDaySelect = (day) => {
		setSelectedDay(day);
	};

	return (
		<section className="min-h-[90vh] w-full bg-blue-100 flex flex-col lg:flex-row items-center ">
			<WeekList onSelectDay={handleDaySelect} />
			<div className=" lg:w-[70%] h-[100%] lg:h-full flex  flex-nowrap">
				<Statistics selectedDay={selectedDay} />
			</div>
		</section>
	);
};
