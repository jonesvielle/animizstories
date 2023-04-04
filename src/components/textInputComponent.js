const TextInputComponent = ({
	placeholder,
	type,
	withBorder,
	password,
	onChange,
}) => {
	return (
		<input
			onChange={onChange}
			type={type}
			placeholder={placeholder}
			style={{
				width: "100%",
				padding: "3%",
				borderRadius: 5,
				borderWidth: withBorder ? 0.5 : 0,
				outline: "none",
				borderColor: "rgb(230 230 230)",
			}}
		/>
	);
};

export default TextInputComponent;
