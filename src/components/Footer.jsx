import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="mx-auto h-[5vh] bg-gradient-to-r from-blue-200 via-orange-200 via-green-200 flex justify-center items-center  shadow-footer">
			<a
				href="https://github.com/sabaudianin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa-brands fa-github text-4xl"></i>
			</a>
			<p className="loader px-8">
				<b>rafbobbob@gmail.com </b>
			</p>
			<p>Copyright &copy;2024 All Rights Reserved.</p>
		</div>
	);
};
