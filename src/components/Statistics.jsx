import { useState } from "react";
import {
	useAuthState,
	useAuthDispatch,
} from "../context/authorization/Authorization";
import { useTaskContext } from "../context/authorization/TasksProvider";
import { getWeek } from "../hooks/getWeek";

export const Statistics = () => {
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

			<div className="w-full h-1/4 bg-[url('/3kids.png')] bg-contain bg-center bg-no-repeat"></div>
			<div>
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mx-8">
					{user?.tasks?.map((task) => (
						<li
							className={`p-4 rounded flex flex-col justify-between border-4 ${
								task.completed
									? "border-green-300 shadow-[0_10px_20px_rgba(0,255,0,0.5)]"
									: "border-red-300 shadow-[0_10px_20px_rgba(255,0,0,0.5)]"
							}`}
							key={task.id}
						>
							{task.text}
							<p className="bg-blue-300 m-2 text-white rounded p-2 text-center">
								<b>{task.points}</b> points
							</p>
							<button
								className={`${
									task.completed
										? "bg-green-400 hover:bg-green-500"
										: "bg-red-400 hover:bg-red-500"
								}`}
								onClick={() => toggleTask(task.id)}
							>
								{task.completed ? "Done" : "To Do"}
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
