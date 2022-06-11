import Activity from "../model/activity.js";

const getList = async (req, res) => {
	try {
		const activity = await Activity.find();
		res.json(activity);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getListById = async (req, res) => {
	try {
		const activity = await Activity.findById(req.params.id);
		res.json(activity);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const createList = async (req, res) => {
	const list = new Activity(req.body);
	try {
		const inserts = await list.save();
		res.status(201).json(inserts);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const updateList = async (req, res) => {
	try {
		const updates = await Activity.updateOne({ _id: req.params.id }, { $set: req.body });
		res.status(200).json(updates);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const deleteList = async (req, res) => {
	try {
		const deleted = await Activity.deleteOne({ _id: req.params.id });
		res.status(200).json(deleted);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export { getList, getListById, createList, updateList, deleteList };
