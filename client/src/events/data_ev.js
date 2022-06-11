import axios from "axios";
import router from "../../../routes/router";
import { createContext, useState } from "react";

const DataContext = createContext();
const DataProvider = (props) => {
	const [data, setData] = useState({
		activity: [],
		title: "",
		note: "",
	});
	
	const getList = async () => {
		const response = await axios.get(router);
		setData({
			...data,
			activity: response.data,
		});
	};

	return (
		<DataContext.Provider
			value={{
				data,
				setData,
				getList,
				URL,
			}}>
			{props.children}
		</DataContext.Provider>
	);
};

export { DataContext, DataProvider };
