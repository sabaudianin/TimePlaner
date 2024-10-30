import { useState } from "react";
import { useTaskContext } from "../context/authorization/TasksProvider";
import { useAuthState } from "../context/authorization/Authorization";

export const Awards = () => {
	const [awardsList, setAwardsList] = useState([
		{
			id: 1,
			text: "Movie evening ",
			points: 50,
			icon: <i className="fa-solid fa-tv"></i>,
		},

		{
			id: 2,
			text: "Pizza Time",
			points: 200,
			icon: <i className="fa-solid fa-pizza-slice"></i>,
		},
		{
			id: 3,
			text: "Trip to Shopping mall",
			points: 200,
			icon: <i className="fa-solid fa-cart-shopping"></i>,
		},
		{
			id: 4,
			text: "Going to the swimming pool",
			points: 100,
			icon: <i className="fa-solid fa-person-swimming"></i>,
		},
		{
			id: 5,
			text: "Going to the cinema ",
			points: 100,
			icon: <i className="fa-solid fa-film"></i>,
		},
		{
			id: 6,
			text: "Mystery Gift",
			points: 300,
			icon: <i className="fa-solid fa-gift"></i>,
		},
		{
			id: 7,
			text: "Game evening",
			points: 300,
			icon: <i className="fa-solid fa-gamepad"></i>,
		},
		{
			id: 8,
			text: "Holidays in paradise",
			points: 999,
			icon: <i className="fa-solid fa-heart"></i>,
		},
		{
			id: 9,
			text: "Custom Wish",
			points: 500,
			icon: <i className="fa-solid fa-award " />,
		},
	]);
	const { user } = useAuthState();
	const { deductPoints } = useTaskContext();

	const handleAward = (award) => {
		deductPoints(award.points);
		console.log(`Picked award: ${award.text}`);
	};
	return (
		<section>
			<h2 className="pt-8">
				Available points: <b> {user.points}</b>
			</h2>
			<h3 className="font-bold my-8 text-3xl">Awards List:</h3>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mt-8 mx-4 text-xs lg:text-base">
				{awardsList.map((award) => (
					<li
						key={award.id}
						className="bg-rgba(255,0,0,0.5) p-6 rounded flex flex-col justify-between border-4 border-red-300 shadow-[0_10px_20px_rgba(255,0,55,0.5)]"
					>
						<p className="flex justify-center items-center text-center fa-2x text-red-500 ">
							{award.icon}
						</p>
						<p className="font-bold text-gray-800">{award.text}</p>
						<p className="bg-blue-400 mt-2 text-white rounded p-2 text-center">
							<b>{award.points}</b> points
						</p>
						<button
							onClick={() => {
								console.log(award);
								handleAward(award);
							}}
							className="mt-2 bg-green-400 hover:bg-green-500"
						>
							Pick this prize
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};
