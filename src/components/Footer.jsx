export const Footer = () => {
	return (
		<div className="mx-auto h-[5vh] bg-gradient-to-r from-blue-200 via-orange-200 via-green-200 flex justify-around items-center shadow-footer">
			<div>
				<a
					className="hover:text-gray-600 font-bold pr-2"
					href="https://github.com/sabaudianin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-github text-2xl"></i>
				</a>
				<a
					className="text-blue-600 hover:text-blue-800 font-bold"
					href="https://linkedin.com/in/rafal-bobko-569388234"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-linkedin text-2xl mx-2"></i>
				</a>
			</div>
			<p className="loader text-xxs lg:text-base">
				<a href="mailto:rafbobbob@gmail.com">
					<b>rafbobbob@gmail.com </b>
				</a>
			</p>
			<p className="text-xxxs">&copy;2024 All Rights Reserved.</p>
		</div>
	);
};
