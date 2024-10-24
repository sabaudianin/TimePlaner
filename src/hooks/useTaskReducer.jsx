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
				tasks: {
					...state.tasks,
					[action.payload.day]: [
						...(state.tasks[action.payload.day] || []),
						action.payload.tasks,
					],
				},
			};

		case "ADD_TASK":
			return {
				...state,
				tasks: {
					...state.tasks,
					[action.payload.day]: [
						...(state.tasks[action.payload.day] || []),
						{
							id: action.id,
							text: action.text,
							points: action.points,
							completed: false,
						},
					],
				},
			};
		case "TOGGLE_TASK":
			return {
				...state,
				tasks: {
					...state.tasks,
					[action.payload.day]: state.tasks[action.payload.day].map((task) =>
						task.id === action.payload.id
							? { ...task, completed: !task.completed }
							: task
					),
				},
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
		(task, day) => {
			const taskId = uuidv4();
			dispatch({
				type: "ADD_TASK",
				id: taskId,
				text: task.text,
				points: task.points,
				day: day,
			});

			const updatedUser = {
				...user,
				tasks: {
					...user.tasks,
					[day]: [
						...(user.tasks[day] || []),
						{
							id: taskId,
							text: task.text,
							points: task.points,
							completed: false,
						},
					],
				},
			};
			updateUser(updatedUser);
		},
		[user, dispatch, updateUser]
	);

	const toggleTask = useCallback(
		(id, day) => {
			dispatch({ type: "TOGGLE_TASK", payload: { id, day } });
			const updatedUser = {
				...user,
				tasks: {
					...user.tasks,
					[day]: user.tasks[day].map((task) =>
						task.id === id ? { ...task, completed: !task.completed } : task
					),
				},
			};
			updateUser(updatedUser);
		},

		[user, updateUser, dispatch]
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
