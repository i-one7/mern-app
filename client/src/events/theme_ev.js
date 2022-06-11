import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("bg-primary-dark", darkMode);
	}, [darkMode]);

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>{children}</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
