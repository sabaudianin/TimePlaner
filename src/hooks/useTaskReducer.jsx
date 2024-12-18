import { useReducer, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { useAuthState } from "../context/authorization/Authorization";
import { useAuthDispatch } from "../context/authorization/Authorization";
import { getWeek } from "./getWeek";

const taskReducer = (state, action) => {
	switch (action.type) {
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

		case "DEDUCT_POINTS": {
			const newPoints = state.points - action.payload.points;
			if (newPoints < 0) {
				return state;
			}
			return {
				...state,
				points: newPoints,
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

	const addTask = useCallback(
		(task, day) => {
			if (!day) {
				toast.error("Day is undefined while adding task");
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

	const deductPoints = useCallback(
		(points) => {
			if (user.points < points) {
				toast.error("Not enough points to claim this award.");
				return;
			}
			dispatch({ type: "DEDUCT_POINTS", payload: { points } });

			const updatedUser = {
				...user,
				points: user.points - points,
			};
			updateUser(updatedUser);
		},
		[user, dispatch, updateUser]
	);

	const calculateWeekPoints = useCallback(() => {
		const currentWeek = getWeek();

		// check is new week , update points
		if (user.lastWeekUpdate !== currentWeek) {
			const completedPoints = Object.values(user.tasks).reduce(
				(acc, dayTasks) => {
					return (
						acc +
						dayTasks.reduce((daySum, task) => {
							return task.completed ? daySum + task.points : daySum;
						}, 0)
					);
				},
				0
			);

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
				points: user.points + completedPoints,
				weekPoints: totalPoints,
				weekPointsCompleted: completedPoints,
				lastWeekUpdate: currentWeek,
			});
		} else {
			// update weekPoints and weekPointsCompleted
			const completedPoints = Object.values(user.tasks).reduce(
				(acc, dayTasks) => {
					return (
						acc +
						dayTasks.reduce((daySum, task) => {
							return task.completed ? daySum + task.points : daySum;
						}, 0)
					);
				},
				0
			);

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
				weekPointsCompleted: completedPoints,
			});
		}
	}, [user, updateUser]);

	return {
		state,
		addTask,
		toggleTask,
		deductPoints,
		calculateWeekPoints,
	};
};
