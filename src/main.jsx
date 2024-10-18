import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthorizationProvider } from "./context/authorization/Authorization.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthorizationProvider>
			<App />
		</AuthorizationProvider>
	</StrictMode>
);
