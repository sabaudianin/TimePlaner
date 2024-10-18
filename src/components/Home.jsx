import { useState } from "react";
import { getWeek } from "../hooks/getWeek";
import { Button } from "../elements/Button";
import { Link } from "react-router-dom";

export const Home = () => {
	const [week, setWeek] = useState(getWeek);

	return (
		<section className="h-[90vh] w-full bg-blue-100">
			<div className="flex flex-col lg:flex-row w-full h-full items-center bg-green-100">
				<div className="w-full lg:w-[30%] h-[10%] lg:h-full bg-pink-100 flex items-center justify-center">
					<ul className="flex flex-row space-x-0.5 lg:space-y-4 lg:flex-col">
						<li>
							<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full ">
								MON
							</button>
						</li>
						<li>
							<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full">
								TUE
							</button>
						</li>
						<li>
							<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full">
								WEN
							</button>
						</li>
						<li>
							<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full">
								THR
							</button>
						</li>
						<li>
							<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full">
								FRI
							</button>
						</li>
						<li>
							<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full">
								SAT
							</button>
						</li>
						<li>
							<button className="bg-yellow-500 py-2 rounded font-bold lg:px-24 hover:bg-yellow-800 hover:text-white transition duration-300 w-full">
								SUN
							</button>
						</li>
					</ul>
				</div>

				<div className="w-full lg:w-[70%] h-[70%] lg:h-full flex items-center justify-center">
					<div className="w-full self-start mt-6 flex justify-around align-center space-x-4">
						<div className="bg-yellow-100">
							<h2 className="font-medium">
								Today: {new Date().toDateString()}
							</h2>
							<h2>Week: {week}</h2>
						</div>
						<div className="bg-yellow-400">
							<h2>Points:</h2>
							<h3>Points planned this week:</h3>
							<h3>Points earned this week:</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
