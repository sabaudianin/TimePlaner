import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home } from "./components/Home";
import { TaskManager } from "./components/TaskManager";
import { Awards } from "./components/Awards";
import { AppLayout } from "./components/AppLayout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<Home />} />
						<Route path="awards" element={<Awards />} />
						<Route path="tasks" element={<TaskManager />} />
					</Route>
				</Routes>

				<ToastContainer />
			</BrowserRouter>
		</>
	);
}

export default App;
