import { useState, useEffect } from "react";
import { useAuthState } from "../context/authorization/Authorization";
import { useTaskContext } from "../context/authorization/TasksProvider";
import { getWeek } from "../hooks/getWeek";
import { UserTaskList } from "./UserTaskList";

export const Statistics = ({ selectedDay }) => {
	const [week, setWeek] = useState(getWeek);
	const { isAuthenticated, user } = useAuthState();
	const { calculateWeekPoints } = useTaskContext();

	useEffect(() => {
		calculateWeekPoints();
	}, []);

	const progress =
		user && user.weekPoints > 0
			? Math.min((user.weekPointsCompleted / user.weekPoints) * 100, 100)
			: 0;

	return (
		<section className="w-full h-full flex flex-col">
			<div className="flex w-full h-1/8">
				<div className="w-1/2 p-8 flex items-center justify-center">
					<div>
						<h2 className="font-medium">
							Today:<b> {new Date().toDateString()}</b>
						</h2>
						<h2>
							Week:<b> {week}</b>
						</h2>
					</div>
				</div>

				<div className="w-1/2  p-4 flex items-center justify-center">
					{isAuthenticated && user && (
						<div>
							<h2>
								Points:<b> {user.points}</b>
							</h2>
							<h3>
								Points planned this week: <b>{user.weekPoints}</b>
							</h3>
							<h3>
								Points earned this week: <b>{user.weekPointsCompleted}</b>
							</h3>
							<div className="mt-4 w-full bg-gray-200 rounded-full h-4">
								<div
									className="bg-third h-4 rounded-full"
									style={{ width: `${progress}%` }}
								></div>
							</div>
							<p className="text-center mt-2">
								{progress.toFixed(2)}% completed
							</p>
						</div>
					)}
				</div>
			</div>

			<div className="w-full h-40 bg-[url('/3kids.png')] bg-contain bg-center bg-no-repeat"></div>
			<UserTaskList selectedDay={selectedDay} />
		</section>
	);
};
