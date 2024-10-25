import { useState } from "react";
import { Form } from "./Form";
import { SignUpForm } from "./SignUp";
import { ImageBox } from "../elements/ImageBox";
import { Frame } from "../elements/Frame";

export const Login = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisible = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<section className="flex justify-around items-center min-h-[90vh] flex-col lg:flex-row  ">
			<div className="w-full lg:w-1/2 h-full lg:h-full hidden lg:flex justify-center items-center  ">
				<div className="relative w-[80%] h-[80%] bg-red-400 ">
					<ImageBox src="/learn.jpg" top="top-10" left="left-0" />
					<ImageBox src="/words.jpg" bottom="bottom-60" left="left-0" />
					<ImageBox src="/game.jpg" bottom="bottom-0" left="left-[25%]" />
					<Frame top="top-20" left="left-10" shadowColor="rgba(255,0,0,0.5)" />
					<Frame top="top-14" left="-left-12" shadowColor="rgba(0,0,255,0.5)" />
					<Frame top="top-4" left="left-6" shadowColor="rgba(0,255,0,0.5)" />
					<Frame
						bottom="bottom-52"
						left="left-10"
						shadowColor="rgba(255,0,0,0.5)"
					/>
					<Frame
						bottom="bottom-56"
						left="-left-12"
						shadowColor="rgba(0,0,255,0.5)"
					/>
					<Frame
						bottom="bottom-64"
						left="left-6"
						shadowColor="rgba(0,255,0,0.5)"
					/>
				</div>
			</div>
			<div className="hidden lg:block absolute w-1/2 h-1/3 bg-[url('/bg.png')] bg-contain bg-bottom bg-no-repeat self-end"></div>

			<div className="flex justify-center items-center w-full lg:w-1/2 h-full lg:h-full  ">
				{isVisible ? <SignUpForm /> : <Form toggleVisible={toggleVisible} />}
			</div>
		</section>
	);
};
