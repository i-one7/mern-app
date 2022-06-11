import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { ThemeContext } from "../events/theme_ev";
import { useContext } from "react";

const SwitchMod = (props) => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<button
			onClick={props.onClick}
			type={props.type}
			className={` ${props.className} bg-secondary-dark flex gap-1 p-1 rounded-full relative outline-none transition-all duration-300`}>
			<HiOutlineSun className="text-yellow-300" />
			<div
				className={`${
					darkMode ? "right-6" : "right-1"
				} p-2 bg-slate-500 rounded-full absolute duration-200`}></div>
			<HiOutlineMoon className="text-yellow-600" />
		</button>
	);
};

const Buttons = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={`${props.className} text-sm font-normal flex gap-1 justify-center`}>
			{props.children}
		</button>
	);
};

export { SwitchMod, Buttons };
