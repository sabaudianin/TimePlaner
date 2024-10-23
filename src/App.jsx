import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Awards } from "./components/Awards";
import { AppLayout } from "./components/AppLayout";
import { Tasks } from "./components/Tasks";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<Home />} />
						<Route path="awards" element={<Awards />} />
						<Route path="tasks" element={<Tasks />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
