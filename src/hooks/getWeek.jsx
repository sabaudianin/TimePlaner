export const getWeek = () => {
	const today = new Date();

	// Obliczenie daty poniedziałku
	const dayOfWeek = today.getDay();
	const monday = new Date(today);
	monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

	// Obliczenie daty niedzieli
	const sunday = new Date(monday);
	sunday.setDate(monday.getDate() + 6);

	// Funkcja formatująca dzień tygodnia i datę
	const formatDate = (date) => {
		const options = { weekday: "short", month: "short", day: "numeric" };
		return date.toLocaleDateString("en-US", options);
	};

	return `${formatDate(monday)} - ${formatDate(sunday)}`;
};
