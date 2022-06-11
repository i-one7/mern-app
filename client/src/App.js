import Navbars from "./components/navbar";
import MainMenu from "./view/main_menu";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
	return (
		<div className="App">
			<Navbars />
			<MainMenu />
		</div>
	);
}

export default App;
