import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthorizationProvider } from "./context/authorization/Authorization.jsx";
import { TasksProvider } from "./context/authorization/TasksProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthorizationProvider>
			<TasksProvider>
				<App />
			</TasksProvider>
		</AuthorizationProvider>
	</StrictMode>
);
