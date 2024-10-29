import { useState } from "react";
import { useTaskContext } from "../context/authorization/TasksProvider";
import { CustomTask } from "./CustomTask";

export const Tasks = () => {
	const { addTask } = useTaskContext();

	const [tasksList, setTasksList] = useState([
		{ id: 1, text: "Room Cleaning", points: 3 },
		{ id: 2, text: "Vaccum saloon", points: 10 },
		{ id: 3, text: "Unload the dishwasher", points: 3 },
		{ id: 4, text: "Dog Walk", points: 5 },
		{ id: 5, text: "Do math", points: 10 },
		{ id: 6, text: "Learn english", points: 10 },
		{ id: 7, text: "Throw trash", points: 10 },
		{ id: 8, text: "Spend time on yard", points: 4 },
		{ id: 9, text: "Make desert", points: 8 },
		{ id: 10, text: "Read a book", points: 6 },
	]);

	const [selectedDay, setSelectedDay] = useState("MON");
	const [isOpen, setIsOpen] = useState(false);

	const addCustomTask = (task) => {
		console.log("Selected Day:", selectedDay);
		console.log("Task:", task);
		if (!selectedDay) {
			console.error("Selected day is undefined");
			return;
		}
		addTask(task, selectedDay);
	};

	const handleAddTask = (newTask) => {
		const updatedTask = { ...newTask, id: tasksList.length + 1 };
		setTasksList([...tasksList, updatedTask]);
		addTask(updatedTask, selectedDay);
	};

	return (
		<section className="w-full flex  justify-center  pt-20 flex-wrap">
			<div className="w-full h-40 bg-[url('/2kids.png')] bg-contain bg-center bg-no-repeat"></div>
			<div className="w-full flex justify-center pt-4">
				<select
					className=" p-2 rounded border-4 border-secondary  "
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
				<li className="bg-gray-200 p-6 rounded flex flex-col justify-between border-4 border-third shadow-[0_10px_20px_#4ADE80] ">
					<p className="font-bold text-gray-800">Add Task</p>
					<p className="bg-secondary mt-2 text-white rounded p-2 text-center">
						<b>?</b> points
					</p>
					<button
						onClick={() => {
							setIsOpen(true);
						}}
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
			<CustomTask
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onAddTask={handleAddTask}
			/>
		</section>
	);
};
