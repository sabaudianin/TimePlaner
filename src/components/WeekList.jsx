export const WeekList = ({ onSelectDay }) => {
	const daysOfWeek = ["MON", "TUE", "WEN", "THR", "FRI", "SAT", "SUN"];
	return (
		<div className="w-full lg:w-[30%] h-[10%] p-8 lg:h-full flex items-center justify-center self-center">
			<ul className="flex flex-row space-x-0.5 lg:space-y-4 lg:flex-col">
				{daysOfWeek.map((day) => (
					<li key={day}>
						<button
							className="bg-accent py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full"
							onClick={() => onSelectDay(day)}
						>
							{day}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
