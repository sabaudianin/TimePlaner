import { useState } from "react";
import { useAuthState } from "../context/authorization/Authorization";
import { useTaskContext } from "../context/authorization/TasksProvider";
import { getWeek } from "../hooks/getWeek";
import { UserTaskList } from "./UserTaskList";

export const Statistics = ({ selectedDay }) => {
	const [week, setWeek] = useState(getWeek);
	const { isAuthenticated, user } = useAuthState();

	const { state, setTasks, addTask, toggleTask, addPoints } = useTaskContext();

	return (
		<section className="w-full h-full flex flex-col">
			<div className="flex w-full h-1/8">
				<div className="w-1/2  p-4 flex items-center justify-center">
					<div>
						<h2 className="font-medium">Today: {new Date().toDateString()}</h2>
						<h2>Week: {week}</h2>
					</div>
				</div>

				<div className="w-1/2  p-4 flex items-center justify-center">
					{isAuthenticated && user && (
						<div>
							<h2>Points: {user.points}</h2>
							<h3>Points planned this week: {user.weekPoints}</h3>
							<h3>Points earned this week: {user.weekPointsCompleted}</h3>
						</div>
					)}
				</div>
			</div>

			<div className="w-full h-40 bg-[url('/3kids.png')] bg-contain bg-center bg-no-repeat"></div>
			<UserTaskList selectedDay={selectedDay} />
		</section>
	);
};
