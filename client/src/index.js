import { ComponentProvider } from "./events/component_ev";
import { ThemeProvider } from "./events/theme_ev";
import { DataProvider } from "./events/data_ev";
import ReactDOM from "react-dom/client";
import React from "react";
import "./css/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<DataProvider>
				<ComponentProvider>
					<App />
				</ComponentProvider>
			</DataProvider>
		</ThemeProvider>
	</React.StrictMode>
);
