import {
	createContext,
	useContext,
	useReducer,
	useCallback,
	useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { useAuthState } from "../context/authorization/Authorization";
import { useAuthDispatch } from "../context/authorization/Authorization";

const taskReducer = (state, action) => {
	switch (action.type) {
		case "SET_TASK":
			return {
				...state,
				tasks: [
					...state.tasks,

					{
						id: state.tasks.length + 1,
						text: action.text,
						points: action.points,
						completed: false,
					},
				],
			};
		case "ADD_TASK":
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						id: action.id,
						text: action.text,
						points: action.points,
						completed: false,
					},
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
	const { user } = useAuthState();
	const { updateUser } = useAuthDispatch();

	const setTasks = useCallback((tasks) => {
		dispatch({ type: "SET_TASK", payload: { tasks } });
	}, []);

	const addTask = useCallback(
		(task) => {
			const taskId = uuidv4();
			dispatch({
				type: "ADD_TASK",
				id: taskId,
				text: task.text,
				points: task.points,
			});

			const updatedUser = {
				...user,
				tasks: [
					...user.tasks,
					{
						id: taskId,
						text: task.text,
						points: task.points,
						completed: false,
					},
				],
			};
			updateUser(updatedUser);
		},
		[user, dispatch, updateUser]
	);

	const toggleTask = useCallback(
		(id) => {
			dispatch({ type: "TOGGLE_TASK", payload: { id } });
			const updatedUser = {
				...user,
				tasks: user.tasks.map((task) =>
					task.id === id ? { ...task, completed: !task.completed } : task
				),
			};
			updateUser(updatedUser);
		},

		[user, updateUser]
	);

	const addPoints = useCallback(
		(points) => {
			dispatch({ type: "ADD_POINTS", payload: { points } });
			const updatedUser = {
				...user,
				points: user.points + points,
			};
			updateUser(updatedUser);
		},
		[user, updateUser]
	);

	return { state, setTasks, addTask, toggleTask, addPoints };
};
