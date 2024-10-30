import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthState } from "../context/authorization/Authorization";
import { useTaskContext } from "../context/authorization/TasksProvider";

export const UserTaskList = ({ selectedDay }) => {
	const { user } = useAuthState();
	const { toggleTask } = useTaskContext();

	const tasksForSelectedDay = user?.tasks?.[selectedDay] || [];

	return (
		<div>
			{tasksForSelectedDay.length > 0 ? (
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 mx-16 ">
					{tasksForSelectedDay.map((task) => {
						const taskBorderClass = task.completed
							? "border-green-300 shadow-[0_10px_20px_rgba(0,255,0,0.5)]"
							: "border-red-300 shadow-[0_10px_20px_rgba(255,0,0,0.5)]";

						return (
							<li
								key={task.id}
								className={`p-2 rounded flex flex-col justify-between border-4 ${taskBorderClass}`}
							>
								<p>{task.text}</p>
								<p className="bg-blue-300 text-white rounded text-center">
									<b>{task.points}</b> points
								</p>
								<button
									className={`${
										task.completed
											? "bg-third hover:bg-green-500"
											: "bg-primary hover:bg-red-500"
									} mt-1  rounded`}
									onClick={() => toggleTask(task.id)}
								>
									{task.completed ? "Done" : "To Do"}
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<div className="w-full text-center mt-36 px-4 ">
					<p className="text-lg font-bold">
						No tasks scheduled for {selectedDay}. Please add tasks to get
						started.
					</p>
					<Link
						to="/tasks"
						className="mt-8 inline-block bg-yellow-500 py-2 px-6 rounded font-bold hover:bg-yellow-800 hover:text-white transition duration-300"
					>
						Add Tasks
					</Link>
				</div>
			)}
		</div>
	);
};

UserTaskList.propTypes = {
	selectedDay: PropTypes.string.isRequired,
};
