import {
	createContext,
	useContext,
	useReducer,
	useCallback,
	useEffect,
} from "react";

const taskReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				tasks: [
					...state.task,
					{ id: action.id, text: action.text, completed: false },
				],
			};
		case "TOGGLE_TASK":
			return {
				...state,
				tasks: state.tasks.map((task) => {
					task.id === action.payload.id ? { ...task, completed: true } : task;
				}),
			};
		case "ADD_POINTS":
			return {
				...state,
				points: state.points + action.payload.points,
			};

		default:
			return state;
	}
};

export const useTaskReducer = (initialState) => {
	const [state, dispatch] = useReducer(taskReducer, initialState);

	const addTask = useCallback((task) => {
		dispatch({ type: "ADD_TASK", payload: { task } });
	}, []);

	const toggleTask = useCallback((id) => {
		dispatch({ type: "TOGGLE_TASK", payload: { id } });
	}, []);

	const addPoints = useCallback((points) => {
		dispatch({ type: "ADD_POINTS", payload: { points } });
	}, []);

	return { state, setTasks, addTask, toggleTask, addPoints };
};
