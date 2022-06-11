import { ThemeContext } from "../events/theme_ev";
import { SwitchMod } from "./button";
import { useContext } from "react";

const Navbars = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	return (
		<nav className="w-full h-auto fixed z-10 px-8 py-3 flex items-center justify-between">
			<div className="font-[Poppins] font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
				todo.io
			</div>
			<div>
				<SwitchMod onClick={() => setDarkMode(!darkMode)} />
			</div>
		</nav>
	);
};

export default Navbars;
