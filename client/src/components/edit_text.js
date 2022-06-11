const Inputs = ({ onChange }) => {
	return (
		<div>
			<input
				onChange={onChange}
				type="text"
				className="bg-slate-200 outline-none text-sm font-light rounded-sm px-4 py-2 w-full"
				placeholder="Heading"
			/>
		</div>
	);
};

const TextAreas = ({ onChange }) => {
	return (
		<div>
			<textarea
				onChange={onChange}
				rows="7"
				className="w-full px-4 py-2 bg-slate-200 font-light rounded-sm outline-none resize-none"
				placeholder="Note"
			/>
		</div>
	);
};

export { Inputs, TextAreas };
