import { Col, Row } from "react-bootstrap";
import SupriseImage from "../images/fireworks2.jpg";

const NewsCard = ({ author, date, body, title }) => {
	return (
		<Col sm={3} className="mt-5">
			<Row>
				<img
					src={SupriseImage}
					className="fluid"
					// style={{ backgroundColor: "green" }}
				/>
			</Row>
			<Row className="text-start border m-0">
				<h5 className="mt-4">{title}</h5>
				<p className="text-secondary" style={{ fontSize: 13 }}>
					{date} - {author}
				</p>
				<p className="text-secondary" style={{ fontSize: 13 }}>
					{body} ...
				</p>
				<div className="mb-5">
					<button className="btn btn-danger">Read More</button>
				</div>
			</Row>
		</Col>
	);
};

export default NewsCard;
