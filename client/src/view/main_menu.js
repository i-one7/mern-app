import { HiOutlineXCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { Inputs, TextAreas } from "../components/edit_text";
import { ComponentContext } from "../events/component_ev";
import { useContext } from "react";
import { ThemeContext } from "../events/theme_ev";
import ListContent from "../components/list_comp";
import { Buttons } from "../components/button";
import Modals from "../components/modal";
import { DataContext } from "../events/data_ev";
import Cards from "../components/card";
import axios from "axios";

const MainMenu = () => {
	const { darkMode } = useContext(ThemeContext);
	const { modal, setModal } = useContext(ComponentContext);
	const { data, URL, setData, getList } = useContext(DataContext);

	const createList = async (e) => {
		e.preventDefault();
		await axios.post(`${URL}`, {
			judul: data.title,
			catatan: data.note,
		});
		setModal(!modal);
		getList();
	};

	const deleteList = async (id) => {
		await axios.delete(`${URL}/${id}`);
		getList();
	};

	return (
		<>
			<section className="bg-banner bg-no-repeat w-full bg-cover h-80 relative">
				<div
					className={`${
						darkMode ? "bg-indigo-900" : "bg-indigo-600"
					} absolute w-full h-full bg-opacity-10 transition duration-300 backdrop-filter backdrop-blur-sm`}></div>
			</section>
			<section className="w-full flex justify-center">
				<Cards
					className={` ${
						darkMode
							? "bg-slate-800 border-slate-700 text-slate-300"
							: " bg-slate-100 border-slate-200"
					} w-1/2 absolute top-52`}>
					<div className="w-full flex justify-between items-center px-8 py-4">
						<span className="text-xl font-semibold">Your Activity</span>
						<Buttons onClick={() => setModal(!modal)}>
							{" "}
							<HiOutlinePlusCircle className="text-4xl" />{" "}
						</Buttons>
					</div>
					<div
						className={`${
							darkMode ? "divide-gray-700" : "divide-gray-200"
						} w-full overflow-y-auto flex flex-col divide-y-2 h-80 scrollbar-hide`}>
						{data.activity.map((values, key) => {
							return (
								<ListContent
									key={key}
									judul={values.judul}
									onClick={() => deleteList(values._id)}
								/>
							);
						})}
					</div>
				</Cards>
			</section>

			<Modals isOpen={modal}>
				<form onSubmit={createList}>
					<div className="w-full flex justify-between items-center py-4">
						<span className="font-semibold text-xl">add new list</span>
						<Buttons className="text-3xl" onClick={() => setModal(!modal)}>
							{" "}
							<HiOutlineXCircle className="text-4xl" />{" "}
						</Buttons>
					</div>
					<div className="w-full flex flex-col gap-2 py-4">
						<Inputs
							onChange={(e) =>
								setData({
									...data,
									title: e.target.value,
								})
							}
						/>
						<TextAreas
							onChange={(e) =>
								setData({
									...data,
									note: e.target.value,
								})
							}
						/>
					</div>
					<div className="w-full flex items-center justify-center gap-2">
						<Buttons
							type="submit"
							className="bg-slate-600 rounded-sm w-32 py-2 text-sm text-white">
							add
						</Buttons>
						<Buttons className="bg-slate-600 w-32 rounded-sm py-2 text-sm text-white">
							clear
						</Buttons>
					</div>
				</form>
			</Modals>
		</>
	);
};

export default MainMenu;
