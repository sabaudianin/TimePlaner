import { useState } from "react";
import {
	useAuthState,
	useAuthDispatch,
} from "../context/authorization/Authorization";
import { useTaskContext } from "../context/authorization/TasksProvider";

export const UserTaskList = ({ selectedDay }) => {
	const { isAuthenticated, user } = useAuthState();

	const { state, setTasks, addTask, toggleTask, addPoints } = useTaskContext();
	const taskForSelectedDay = user?.tasks?.[selectedDay] || [];
	return (
		<div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mx-8 mt-8">
				{taskForSelectedDay.length > 0 ? (
					taskForSelectedDay.map((task) => (
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
					))
				) : (
					<p>No tasks for {selectedDay}</p>
				)}
			</ul>
		</div>
	);
};
