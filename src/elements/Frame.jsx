export const Frame = ({ top, left, bottom, right, shadowColor }) => (
	<div
		className={`absolute ${top || ""} ${left || ""} ${bottom || ""} ${
			right || ""
		} h-[15vh] w-[30vw] max-w-xs rounded-xl bg-transparent z-0`}
		style={{ boxShadow: `0 10px 20px ${shadowColor}` }}
	/>
);
