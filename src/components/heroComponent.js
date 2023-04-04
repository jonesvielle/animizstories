import NavbarComponent from "./navbarComponent";
import "../App.css";
import SupriseImage from "../images/sp1.png";
import SupriseImage1 from "../images/sp2.png";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";

const HeroComponent = () => {
	return (
		<div className="heroComponent">
			<NavbarComponent />
			{/* <div></div> */}
			<Container style={{ marginTop: "10%", marginBottom: "40%" }} fluid="md">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						// backgroundColor: "red",
						width: "100%",
						textAlign: "center",
					}}
				>
					<Row style={{ marginBottom: "3%" }}>
						<Col sm={12} className="d-flex justify-content-center">
							<h1
								className="text-white curly-text-bold"
								style={{ fontSize: 30 }}
							>
								CELEBRATION
							</h1>
						</Col>
					</Row>
				</div>

				<Row>
					<Col sm={12}>
						<Image fluid={true} src={SupriseImage} />
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<h1 style={{ color: "white", fontSize: 50 }} className="curly-text">
							Celebration of Someone Special
						</h1>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<Image fluid={true} src={SupriseImage1} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeroComponent;
