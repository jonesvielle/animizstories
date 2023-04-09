import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Logo from "../images/animizstories.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
// import {}

const NavbarComponent = () => {
	const navigation = useNavigate();
	const locateGallery = () => {
		navigation("/gallery");
	};
	const locateHome = () => {
		navigation("/");
	};
	const locateContact = () => {
		navigation("/register");
	};
	return (
		<Navbar
			bg="transparent"
			variant="dark"
			expand="lg"
			className="gap-x bg-transparent"
		>
			<Container>
				<Navbar.Brand
					href="#home"
					style={{
						fontSize: 40,
						display: "flex",
						alignItems: "center",
						fontWeight: "400",
						marginTop: "1%",
					}}
					className="text-white curly-text-bold"
				>
					<img
						src={Logo}
						width="50"
						height="50"
						className="d-inline-block align-top"
						alt="..."
					/>{" "}
					Animizstories
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav text-light" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav className="justify-content-end w-100">
						<Nav.Link
							onClick={locateHome}
							className="rounded-btn-white"
							style={{ color: "black", fontSize: 14 }}
						>
							Home
						</Nav.Link>
						<Nav.Link
							className="rounded-btn-white"
							onClick={locateGallery}
							style={{ color: "black", fontSize: 14 }}
						>
							Our Gallery
						</Nav.Link>
						<Nav.Link
							className="rounded-btn-white"
							onClick={locateContact}
							style={{ color: "black", fontSize: 14 }}
						>
							Try Now
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
