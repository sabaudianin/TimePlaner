import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useTaskReducer } from "../../hooks/useTaskReducer";

const TaskStateContext = createContext();

export const TasksProvider = ({ children }) => {
	const { state, addTask, toggleTask, deductPoints, calculateWeekPoints } =
		useTaskReducer();

	return (
		<TaskStateContext.Provider
			value={{
				state,
				addTask,
				toggleTask,
				deductPoints,
				calculateWeekPoints,
			}}
		>
			{children}
		</TaskStateContext.Provider>
	);
};
TasksProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useTaskContext = () => {
	const context = useContext(TaskStateContext);
	if (context === undefined) {
		throw new Error("useTaskState must be used within a TaskProvider");
	}
	return context;
};
