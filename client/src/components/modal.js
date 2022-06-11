import { useContext } from "react";
import Modal from "react-modal";
import { ThemeContext } from "../events/theme_ev";

const Modals = (props) => {
	const { darkMode } = useContext(ThemeContext);
	return (
		<Modal
			isOpen={props.isOpen}
			className={`${props.className} px-8 py-4 rounded-md ${
				darkMode
					? "bg-slate-800 border-slate-700 text-slate-300"
					: " bg-slate-100 border-slate-200"
			}`}>
			{props.children}
		</Modal>
	);
};

export default Modals;
