import PropTypes from "prop-types";

export const TaskList = ({
	tasksList,
	selectedDay,
	setSelectedDay,
	addCustomTask,
	onAddNewTask,
}) => {
	return (
		<div className="w-full">
			<div className="w-full flex justify-center pt-4">
				<select
					className="p-2 rounded border-4 border-secondary"
					value={selectedDay}
					onChange={(e) => setSelectedDay(e.target.value)}
				>
					<option value="MON">Monday</option>
					<option value="TUE">Tuesday</option>
					<option value="WEN">Wednesday</option>
					<option value="THR">Thursday</option>
					<option value="FRI">Friday</option>
					<option value="SAT">Saturday</option>
					<option value="SUN">Sunday</option>
				</select>
			</div>

			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 pt-8">
				{tasksList.map((task) => (
					<li
						key={task.id}
						className="bg-rgba(255,0,0,0.5) p-6 rounded flex flex-col justify-between border-4 border-primary shadow-[0_10px_20px_#F87171]"
					>
						<p className="font-bold text-gray-800">{task.text}</p>
						<p className="bg-secondary mt-2 text-white rounded p-2 text-center">
							<b>{task.points}</b> points
						</p>
						<button
							onClick={() => addCustomTask(task)}
							className="bg-accent rounded font-bold lg:px-16 hover:bg-yellow-800 hover:text-white transition duration-300 w-full mt-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 mx-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</button>
					</li>
				))}
				<li className="bg-gray-200 p-6 rounded flex flex-col justify-between border-4 border-third shadow-[0_10px_20px_#4ADE80]">
					<p className="font-bold text-gray-800">Add Task</p>
					<p className="bg-secondary mt-2 text-white rounded p-2 text-center">
						<b>?</b> points
					</p>
					<button
						onClick={onAddNewTask}
						className="bg-accent rounded font-bold lg:px-16 hover:bg-yellow-800 hover:text-white transition duration-300 w-full mt-4 text-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mx-auto"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</button>
				</li>
			</ul>
		</div>
	);
};

TaskList.propTypes = {
	tasksList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			points: PropTypes.number.isRequired,
		})
	).isRequired,
	selectedDay: PropTypes.string.isRequired,
	setSelectedDay: PropTypes.func.isRequired,
	addCustomTask: PropTypes.func.isRequired,
	onAddNewTask: PropTypes.func.isRequired,
};
