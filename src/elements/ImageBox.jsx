export const ImageBox = ({ src, top, left, bottom, right }) => (
	<div
		className={`absolute ${top || ""} ${left || ""} ${bottom || ""} ${
			right || ""
		} h-[15vh] w-[30vw] max-w-xs rounded-xl shadow-lg z-30`}
		style={{
			backgroundImage: `url(${src})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		}}
	/>
);
