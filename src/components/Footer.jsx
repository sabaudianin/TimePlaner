import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="mx-auto h-[5vh] bg-gradient-to-r from-blue-200 via-orange-200 via-green-200 flex justify-center items-center  shadow-footer">
			<a
				className="hover:text-gray-600 font-bold"
				href="https://github.com/sabaudianin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa-brands fa-github text-4xl"></i>
			</a>
			<a
				className="text-blue-600 hover:text-blue-800 font-bold"
				href="www.linkedin.com/in/rafal-bobko-569388234"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa-brands fa-linkedin text-4xl mx-4"></i>
			</a>
			<a
				className="hover:text-red-800 font-bold"
				href="mailto:rafbobbob@gmail.com"
			>
				<i className="fa-regular fa-envelope text-4xl"></i>
			</a>
			<p className="loader px-4">
				<b>rafbobbob@gmail.com </b>
			</p>
			<p className="text-xs">Copyright &copy;2024 All Rights Reserved.</p>
		</div>
	);
};
