import {
	createContext,
	useContext,
	useReducer,
	useCallback,
	useEffect,
} from "react";
import { useAuthState } from "./authorization/Authorization";
import { useTaskReducer } from "../../hooks/useTaskReducer";

const TaskStateContext = createContext();

export const TasksProvider = ({ children }) => {
	const { user } = useAuthState();

	const initialState = {
		tasks: user?.tasks || [],
		points: user?.points || 0,
	};

	const { state, setTasks, addTask, toggleTask, addPoints } =
		useTaskReducer(initialState);

	useEffect(() => {
		if (user) {
			const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
			const updatedUsers = storedUsers.map((storedUser) =>
				storedUser.email === user.email
					? { ...storedUser, tasks: state.tasks, points: state.points }
					: storedUser
			);

			localStorage.setItem("users", JSON.stringify(updatedUsers));
		}
	}, [user, state.tasks, state.points]);

	return (
		<TaskStateContext.Provider
			value={{ state, addTask, toggleTask, addPoints }}
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
