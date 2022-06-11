import { HiOutlineTrash, HiOutlineEye, HiOutlineStar } from "react-icons/hi";
import { Buttons } from "./button";

const ListContent = (props) => {
	return (
		<div className="flex justify-between px-8 py-4">
			<div className="flex gap-2 items-center">
				<Buttons className="p-2">
					<HiOutlineStar className="text-2xl" />
				</Buttons>
				<span className="font-medium">{props.judul}</span>
			</div>
			<div className="flex gap-2 items-center">
				<Buttons className="p-2">
					<HiOutlineEye className="text-2xl" />
				</Buttons>
				<Buttons onClick={props.onClick} className="p-2">
					<HiOutlineTrash className="text-2xl" />
				</Buttons>
			</div>
		</div>
	);
};

export default ListContent;
