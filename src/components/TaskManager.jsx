import { CustomTask } from "./CustomTask";
import { TaskList } from "./TaskList";
import { useTasksLogic } from "../hooks/useTaskLogic";

export const TaskManager = () => {
	const {
		tasksList,
		selectedDay,
		isOpen,
		setIsOpen,
		setSelectedDay,
		addCustomTask,
		handleAddTask,
	} = useTasksLogic();

	return (
		<section className="w-full flex justify-center pt-2 lg:pt-8 flex-wrap">
			<div className="hidden lg:block w-full h-40 bg-[url('/2kids.png')] bg-contain bg-center bg-no-repeat "></div>
			<TaskList
				tasksList={tasksList}
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
				addCustomTask={addCustomTask}
				onAddNewTask={() => setIsOpen(true)}
			/>
			<CustomTask
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onAddTask={handleAddTask}
			/>
		</section>
	);
};
