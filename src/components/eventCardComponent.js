import { Col, Row } from "react-bootstrap";
import {
	IoInfiniteOutline,
	IoLocateSharp,
	IoLocationSharp,
	IoPersonOutline,
	IoTimeOutline,
} from "react-icons/io5";

const EventCardComponent = ({
	name,
	time,
	address,
	onClick,
	title,
	description,
}) => {
	return (
		<div
			style={{
				width: "100%",
				// backgroundColor: "red",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Row
				className="bg-transparent px-0 py-3 d-flex align-items-center mb-5 event-card justify-content-center"
				style={{ width: "90%" }}
			>
				<Col sm={2} className="p-0">
					<img
						style={{ width: 150, height: 150 }}
						className="img-fluid rounded-circle"
						src="https://thumbs.dreamstime.com/b/profile-portrait-grey-white-domestic-short-haired-cat-sitting-outdoors-grey-white-cat-portrait-151885799.jpg"
					/>
				</Col>
				<Col sm={8}>
					<Row className="d-flex text-start  text-dark">
						<h4 style={{ fontWeight: "400" }}>{title}</h4>
					</Row>
					<Row className="d-flex text-start text-secondary">
						<p style={{ fontSize: 14 }}>{description}</p>
					</Row>
					<Row>
						<div className="d-flex justify-content-start flex-row flex-wrap align-items-start">
							<IoPersonOutline size={14} color={"purple"} />
							<h6 className="ms-2" style={{ fontSize: 14 }}>
								{name}
							</h6>
							<IoTimeOutline size={14} color={"purple"} className="ms-2" />
							<h6 className="ms-2" style={{ fontSize: 14 }}>
								{time}
							</h6>
							<IoLocationSharp size={14} color={"purple"} className="ms-2" />
							<h6 className="ms-2" style={{ fontSize: 14 }}>
								{address}
							</h6>
						</div>
					</Row>
				</Col>
				<Col sm={1} className="d-flex justify-centent-center">
					<button className="btn btn-primary" onClick={onClick}>
						Register
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default EventCardComponent;
