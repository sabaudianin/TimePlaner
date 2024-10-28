import { useState } from "react";

export const CustomTask = ({ isOpen, onClose, onAddTask }) => {
	const [taskText, setTaskText] = useState("");
	const [taskPoints, setTaskPoints] = useState("");

	if (!isOpen) return null;

	const handleAddTask = () => {
		if (!taskText || !taskPoints) {
			alert("Please provide both task description and points.");
			return;
		}

		const newTask = {
			text: taskText,
			points: parseInt(taskPoints, 10),
		};

		onAddTask(newTask);
		onClose();
		setTaskText("");
		setTaskPoints("");
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-xl font-bold mb-4">Add New Task</h2>
				<input
					type="text"
					className="p-2 border border-gray-400 rounded mb-2 w-full"
					placeholder="Enter task description"
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
				/>
				<input
					type="number"
					className="p-2 border border-gray-400 rounded mb-4 w-full"
					placeholder="Enter task points"
					value={taskPoints}
					onChange={(e) => setTaskPoints(e.target.value)}
				/>
				<div className="flex justify-end space-x-2">
					<button
						className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
						onClick={handleAddTask}
					>
						Add Task
					</button>
				</div>
			</div>
		</div>
	);
};
