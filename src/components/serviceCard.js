import { Card, Col } from "react-bootstrap";

const ServiceCard = ({ cardImage, cardTitle, cardParagraph }) => {
	return (
		<Col style={{ marginTop: "3%" }}>
			<Card
				className="shadow-lg justify-content-center"
				style={{
					width: "18rem",
					border: 0,
				}}
			>
				<Card.Img
					style={{
						paddingLeft: "15%",
						paddingRight: "15%",
						marginTop: "5%",
						width: 300,
						height: 200,
					}}
					className="rounded-circle"
					variant="top"
					src={cardImage}
				/>
				<Card.Body>
					<Card.Title
						className="blocked-text"
						style={{ color: "rgb(52 58 64)" }}
					>
						{cardTitle}
					</Card.Title>
					<Card.Text className="text-secondary card-text">
						<h6 style={{ fontSize: 13 }}>{cardParagraph}</h6>
					</Card.Text>
					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ServiceCard;
