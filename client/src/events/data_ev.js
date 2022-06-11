import axios from "axios";
import { createContext, useState } from "react";

const DataContext = createContext();
const URL = "http://trainingcluster.rpvqk.mongodb.net/db_activity"
const DataProvider = (props) => {
	const [data, setData] = useState({
		activity: [],
		title: "",
		note: "",
	});
	
	const getList = async () => {
		const response = await axios.get(URL);
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
