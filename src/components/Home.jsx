import { useState } from "react";
import { WeekList } from "./WeekList";
import { Statistics } from "./Statistics";

export const Home = () => {
	const [selectedDay, setSelectedDay] = useState("MON");

	const handleDaySelect = (day) => {
		setSelectedDay(day);
	};

	return (
		<section className="w-full flex flex-col lg:flex-row ">
			<WeekList onSelectDay={handleDaySelect} />
			<Statistics selectedDay={selectedDay} />
		</section>
	);
};
