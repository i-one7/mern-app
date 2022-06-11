import Modal from "react-modal";

const Modals = (props) => {
	return (
		<Modal isOpen={props.isOpen} className={`${props.className} p-4 rounded-md`}>
			{props.children}
		</Modal>
	);
};

export default Modals;
