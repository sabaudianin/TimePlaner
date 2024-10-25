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
						...action.payload.tasks,
					],
				},
			};

		case "ADD_TASK":
			console.log("Reducer Day:", action.payload.day);
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
		case "TOGGLE_TASK": {
			const updatedTasks = { ...state.tasks };
			for (const day in updatedTasks) {
				updatedTasks[day] = updatedTasks[day].map((task) =>
					task.id === action.payload.id
						? { ...task, completed: !task.completed }
						: task
				);
			}

			// Recalculate completed points
			const weekPointsCompleted = Object.values(updatedTasks)
				.flat()
				.reduce((sum, task) => (task.completed ? sum + task.points : sum), 0);

			return {
				...state,
				tasks: updatedTasks,
				weekPointsCompleted,
			};
		}

		case "ADD_POINTS":
			return {
				...state,
				points: state.points + action.payload.points,
			};
		case "CALCULATE_WEEK_POINTS": {
			let totalPoints = 0;
			for (const day in state.tasks) {
				state.tasks[day].forEach((task) => {
					totalPoints += task.points;
				});
			}
			return {
				...state,
				weekPoints: totalPoints,
			};
		}
		default:
			return state;
	}
};

export const useTaskReducer = () => {
	const [state, dispatch] = useReducer(taskReducer, { tasks: {}, points: 0 });
	const { user } = useAuthState();
	const { updateUser } = useAuthDispatch();

	const setTasks = useCallback((tasks, day) => {
		dispatch({ type: "SET_TASK", payload: { tasks, day } });
	}, []);

	const addTask = useCallback(
		(task, day) => {
			if (!day) {
				console.error("Day is undefined while adding task");
				return;
			}

			const taskId = uuidv4();
			dispatch({
				type: "ADD_TASK",
				id: taskId,
				text: task.text,
				points: task.points,
				payload: { day },
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
		(id) => {
			dispatch({ type: "TOGGLE_TASK", payload: { id } });

			const updatedUserTasks = { ...user.tasks };
			for (const day in updatedUserTasks) {
				updatedUserTasks[day] = updatedUserTasks[day].map((task) =>
					task.id === id ? { ...task, completed: !task.completed } : task
				);
			}

			// Calculate completed points for updated user tasks
			const weekPointsCompleted = Object.values(updatedUserTasks)
				.flat()
				.reduce((sum, task) => (task.completed ? sum + task.points : sum), 0);

			updateUser({
				...user,
				tasks: updatedUserTasks,
				weekPointsCompleted,
			});
		},
		[user, dispatch, updateUser]
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

	const calculateWeekPoints = useCallback(() => {
		dispatch({ type: "CALCULATE_WEEK_POINTS" });
		const totalPoints = Object.values(user.tasks).reduce((acc, dayTasks) => {
			return (
				acc +
				dayTasks.reduce((daySum, task) => {
					return daySum + task.points;
				}, 0)
			);
		}, 0);

		updateUser({
			...user,
			weekPoints: totalPoints,
		});
	}, [user, updateUser, dispatch]);

	return {
		state,
		setTasks,
		addTask,
		toggleTask,
		addPoints,
		calculateWeekPoints,
	};
};
