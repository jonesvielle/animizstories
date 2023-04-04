import { Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
const TestimonyCard = ({ message, heading, testifier }) => {
	return (
		<Col className="bg-white py-5 px-4 d-flex flex-column rounded m-3" sm={3}>
			<p style={{ fontSize: 14 }} className="text-secondary">
				<FaQuoteLeft className="text-info" size={20} /> {message}
			</p>
			<div className="d-flex">
				<IoPersonCircleSharp size={100} className="text-secondary" />
				<div className="d-flex flex-column align-items-start justify-content-center">
					<p className="h6">{testifier}</p>
					<p className="text-secondary" style={{ fontSize: 14 }}>
						{heading}
					</p>
				</div>
			</div>
		</Col>
	);
};

export default TestimonyCard;
