import {
	createContext,
	useContext,
	useReducer,
	useCallback,
	useEffect,
} from "react";
import { useAuthState } from "./Authorization";
import { useTaskReducer } from "../../hooks/useTaskReducer";
import { useAuthDispatch } from "./Authorization";

const TaskStateContext = createContext();

export const TasksProvider = ({ children }) => {
	const {
		state,
		setTasks,
		addTask,
		toggleTask,
		deductPoints,
		calculateWeekPoints,
	} = useTaskReducer();

	return (
		<TaskStateContext.Provider
			value={{
				state,
				addTask,
				toggleTask,
				setTasks,
				deductPoints,
				calculateWeekPoints,
			}}
		>
			{children}
		</TaskStateContext.Provider>
	);
};

export const useTaskContext = () => {
	const context = useContext(TaskStateContext);
	if (context === undefined) {
		throw new Error("useTaskState must be used within a TaskProvider");
	}
	return context;
};
