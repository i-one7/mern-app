const Cards = ({ children, className }) => {
	return <div className={`${className} p-3 rounded-md`}>{children}</div>;
};

export default Cards;
