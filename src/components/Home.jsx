import { useState } from "react";
import { WeekList } from "./WeekList";
import { Statistics } from "./Statistics";

export const Home = () => {
	const [selectedDay, setSelectedDay] = useState("MON");

	const handleDaySelect = (day) => {
		setSelectedDay(day);
	};

	return (
		<section className="min-h-[90vh] w-full  flex flex-col lg:flex-row ">
			<WeekList onSelectDay={handleDaySelect} />
			<div className=" lg:w-[70%] h-[100%] lg:h-full flex  flex-nowrap">
				<Statistics selectedDay={selectedDay} />
			</div>
		</section>
	);
};
