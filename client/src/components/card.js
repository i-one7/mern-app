const Cards = ({ children, className }) => {
	return <div className={`${className} p-3 rounded-md px-8 py-4`}>{children}</div>;
};

export default Cards;
