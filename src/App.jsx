import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Plan } from "./components/Plan";
import { AppLayout } from "./components/AppLayout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<Home />} />
						<Route path="plan" element={<Login />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
