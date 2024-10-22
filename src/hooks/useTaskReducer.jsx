import {
	createContext,
	useContext,
	useReducer,
	useCallback,
	useEffect,
} from "react";

const taskReducer = (state, action) => {
	switch (action.type) {
		case "SET_TASK":
			return {
				...state,
				tasks: action.payload.tasks,
			};
		case "ADD_TASK":
			return {
				...state,
				tasks: [
					...state.tasks,
					{ id: action.id, text: action.text, completed: false },
				],
			};
		case "TOGGLE_TASK":
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload.id
						? { ...task, completed: !task.completed }
						: task
				),
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

export const useTaskReducer = () => {
	const [state, dispatch] = useReducer(taskReducer, { tasks: [], points: 0 });

	const setTasks = useCallback((tasks) => {
		dispatch({ type: "SET_TASK", payload: { tasks } });
	}, []);

	const addTask = useCallback((text) => {
		dispatch({ type: "ADD_TASK", id: Date.now(), text });
	}, []);

	const toggleTask = useCallback((id) => {
		dispatch({ type: "TOGGLE_TASK", payload: { id } });
	}, []);

	const addPoints = useCallback((points) => {
		dispatch({ type: "ADD_POINTS", payload: { points } });
	}, []);

	return { state, setTasks, addTask, toggleTask, addPoints };
};
