export const WeekList = () => {
	return (
		<div className="w-full lg:w-[30%] h-[10%] lg:h-full flex items-center justify-center">
			<ul className="flex flex-row space-x-0.5 lg:space-y-4 lg:flex-col">
				{["MON", "TUE", "WEN", "THR", "FRI", "SAT", "SUN"].map((day) => (
					<li key={day}>
						<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full">
							{day}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
