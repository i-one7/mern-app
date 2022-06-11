import { ThemeContext } from "../events/theme_ev";
import { useContext } from "react";

const Inputs = ({ onChange }) => {
	const { darkMode } = useContext(ThemeContext);
	return (
		<div>
			<input
				onChange={onChange}
				type="text"
				className={`${darkMode? " bg-slate-700":""} outline-none text-lg rounded-sm px-4 py-2 w-full`}
				placeholder="Heading"
			/>
		</div>
	);
};

const TextAreas = ({ onChange }) => {
	const { darkMode } = useContext(ThemeContext);
	return (
		<div>
			<textarea
				onChange={onChange}
				rows="7"
				className={`${
					darkMode ? " bg-slate-700" : ""
				} w-full px-4 py-2 font-light rounded-sm outline-none resize-none scrollbar-hide`}
				placeholder="Note"
			/>
		</div>
	);
};

export { Inputs, TextAreas };
