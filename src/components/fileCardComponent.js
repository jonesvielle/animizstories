import { Col } from "react-bootstrap";
import { IoCloseCircleOutline, IoCloseOutline } from "react-icons/io5";

const FileCardComponent = ({ file, onCancel }) => {
	return (
		<Col
			sm={3}
			className="bg-info p-2 mt-1"
			style={{
				fontWeight: "light",
				borderRadius: "5px",
				// width: "48%",
				wordWrap: "break-word",
			}}
		>
			{file}
			<IoCloseCircleOutline className="mx-2" onClick={onCancel} />
		</Col>
	);
};

export default FileCardComponent;
