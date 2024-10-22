export const Tasks = () => {
	const tasks = [
		{ id: 1, text: "Room Cleaning", points: 3 },
		{ id: 2, text: "Vaccum saloon", points: 10 },
		{ id: 3, text: "Unload the dishwasher", points: 3 },
		{ id: 4, text: "Dog Walk", points: 5 },
		{ id: 5, text: "Do math", points: 10 },
		{ id: 6, text: "Learn english", points: 10 },
		{ id: 7, text: "Throw trash", points: 10 },
		{ id: 8, text: "Spend time on yard", points: 4 },
		{ id: 9, text: "Make desert", points: 8 },
		{ id: 10, text: "Read a book", points: 6 },
	];
	return (
		<div className="w-full flex items-center justify-center mx-10 mt-20">
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 w-full">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="bg-rgba(0,255,0,0.5) p-6 rounded flex flex-col justify-between border-4 border-red-300 shadow-[0_10px_20px_rgba(0,0,255,0.5)]"
					>
						<p className="font-bold text-gray-800">{task.text}</p>
						<p className="bg-blue-400 mt-2 text-white rounded p-2 text-center">
							<b>{task.points}</b> points
						</p>
						<button className="bg-yellow-500 rounded font-bold lg:px-16 hover:bg-yellow-800 hover:text-white transition duration-300 w-full mt-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 mx-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
