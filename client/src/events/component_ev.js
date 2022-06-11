import { createContext, useState } from "react";

const ComponentContext = createContext();
const ComponentProvider = ({ children }) => {
	const [modal, setModal] = useState(false);

	return (
		<ComponentContext.Provider
			value={{
				modal,
				setModal,
			}}>
			{children}
		</ComponentContext.Provider>
	);
};

export { ComponentContext, ComponentProvider };
