import { useState } from "react";
import { useTaskContext } from "../context/authorization/TasksProvider";

export const useTasksLogic = () => {
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

	return {
		tasksList,
		selectedDay,
		isOpen,
		setIsOpen,
		setSelectedDay,
		addCustomTask,
		handleAddTask,
	};
};
