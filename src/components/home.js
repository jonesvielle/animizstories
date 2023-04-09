import HeroComponent from "./heroComponent";
import {
	Container,
	Row,
	Col,
	Image,
	Card,
	Modal,
	Button,
} from "react-bootstrap";

import SupriseImage from "../images/fireworks2.jpg";
import SupriseImage1 from "../images/tie.png";
import SupriseImage3 from "../images/sp2.png";
import RibbonImage1 from "../images/ribbon.png";
import glassImage from "../images/glass.png";
import {
	IoInfiniteOutline,
	IoLocateSharp,
	IoLocationSharp,
	IoLogoFacebook,
	IoLogoTwitter,
	IoPersonCircleSharp,
	IoPersonOutline,
	IoTimeOutline,
} from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import BirthdaySurpriseImage from "../images/bs.jpg";
import WeddingAnniversaryImagee from "../images/wa.jpg";
import HouseWarmingVideo from "../images/hw.jpg";
import InvitationCardImage from "../images/ic.jpg";
import PostHumousBirthdayImage from "../images/ph1.jpg";
import GraduationVideo from "../images/gv.jpg";
import ServiceCard from "./serviceCard";
import TextInputComponent from "./textInputComponent";
import EventCardComponent from "./eventCardComponent";
import TestimonyCard from "./testimonyCard";
import NewsCard from "./newsCard";
import RoutesComponent from "./routesComponent";
// import { Routes, Route } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [events, setEvents] = useState([]);
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [selectdEventId, setSelectedEventId] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [blogPosts, setBlogPosts] = useState([]);

	const handleFullname = (e) => {
		setFullname(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const navigation = useNavigate();
	// alert(sasToken);
	const handleClose = () => {
		console.log("closes");
	};
	const locateRegister = () => {
		navigation("/register");
	};
	const locateBlog = (id) => {
		navigation("/blog", { state: { id } });
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};
	const handleShowModal = (id) => {
		setShowModal(true);
		setSelectedEventId(id);
	};

	const getEvents = () => {
		let config = {
			method: "get",
			maxBodyLength: Infinity,
			url: process.env.REACT_APP_API_URL + "events",
			headers: {},
		};

		axios
			.request(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				setEvents(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const attendEvent = (id) => {
		setIsLoading(true);
		if (fullname.length < 1) {
			setError("enter fullname");
			setIsLoading(false);
		} else if (email.length < 1) {
			setError("enter fullname");
			setIsLoading(false);
		} else {
			let data = JSON.stringify({
				fullname: fullname,
				email: email,
				event_id: id,
			});

			let config = {
				method: "post",
				maxBodyLength: Infinity,
				url: process.env.REACT_APP_API_URL + "attendance",
				headers: {
					"Content-Type": "application/json",
				},
				data: data,
			};

			axios
				.request(config)
				.then((response) => {
					// console.log(JSON.stringify(response.data));
					alert(`Thanks ${fullname}, response submitted successfully`);
					setShowModal(false);
					setIsLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setError("something went wrong!");
					setIsLoading(false);
				});
		}
	};

	const getBlogPost = () => {
		let config = {
			method: "get",
			maxBodyLength: Infinity,
			url: process.env.REACT_APP_API_URL + "blogPosts",
			headers: {},
		};

		axios
			.request(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				setBlogPosts(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getEvents();
		getBlogPost();
	}, []);
	return (
		<div style={{ width: "100%" }}>
			{/* <RoutesComponent /> */}
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Body>
					<h4>Event Sign Up</h4>
					<label className="text-danger">{error}</label>
					<TextInputComponent
						placeholder={"Full Name"}
						onChange={handleFullname}
					/>
					<TextInputComponent placeholder={"Email"} onChange={handleEmail} />
					<div>
						<Button
							disabled={isLoading}
							onClick={() => {
								attendEvent(selectdEventId);
							}}
							className="mt-1"
						>
							{isLoading ? "Loading..." : "Submit"}
						</Button>{" "}
						<Button
							onClick={handleCloseModal}
							className="mt-1 bg-danger"
							style={{ borderWidth: 0 }}
						>
							Go back
						</Button>
					</div>
				</Modal.Body>
			</Modal>
			<HeroComponent />
			<Container>
				<Row
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						marginTop: "5%",
						marginBottom: "2%",
					}}
				>
					<Col sm={8}>
						<h1 className="blocked-text" style={{ color: "rgb(52 58 64)" }}>
							About Animestories
						</h1>
					</Col>
					<Col sm={10}>
						<Image fluid={true} src={SupriseImage1} />
					</Col>
				</Row>
				<Row
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<Col sm={11}>
						<Image fluid={true} src={SupriseImage} />
					</Col>
				</Row>
				<Row
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						marginTop: "2%",
					}}
				>
					<Col sm={11}>
						<p className="text-secondary">
							Exercitation in consectetur Lorem nisi ad. Aute cupidatat aute
							fugiat nisi labore dolore et excepteur mollit sunt reprehenderit
							incididunt laboris ad. Labore laboris sit reprehenderit consequat
							enim occaecat culpa laborum elit laboris anim voluptate consequat.
							Ex magna do ad cillum cillum nisi sunt nostrud ut. Aute cupidatat
							eu consectetur anim consectetur esse eiusmod cillum et.
						</p>
					</Col>
				</Row>
				<Row style={{ marginTop: "3%", marginBottom: "7%" }}>
					<Col>
						<Link to="/register" className="btn btn-primary">
							Commence with us
						</Link>
					</Col>
				</Row>
			</Container>
			<div className="get-started">
				<Row className="align-items-sm-center">
					<Col sm={6}>
						<div style={{ textAlign: "left" }}>
							<h6 className="text-white blocked-text">
								it's the time of the year again ...
							</h6>
							<h1 className="text-white blocked-text">
								LETS GET THE SURPRISE STARTED
							</h1>
						</div>
					</Col>
					<Col sm={6} className="sm-mt-5">
						<h1
							className="text-white rock-text"
							style={{
								backgroundColor: "rgba(0,0,0,0.3)",
								paddingLeft: "15%",
								paddingRight: "15%",
								paddingTop: "10%",
								paddingBottom: "10%",
							}}
						>
							THE SEASON FOR SURPISE
						</h1>
					</Col>
				</Row>
			</div>
			<div
				style={{
					padding: "8%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Row>
					<Col>
						<h1 className="blocked-text">Services We Offer</h1>
					</Col>
				</Row>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						width: "100%",
						// backgroundColor: "red",
						justifyContent: "center",
					}}
				>
					<div
						style={{ backgroundColor: "cyan", width: "7%", height: 3 }}
					></div>
					<IoInfiniteOutline style={{ margin: "1%", color: "cyan" }} />
					<div
						style={{ backgroundColor: "cyan", width: "7%", height: 3 }}
					></div>
				</div>
				<Row style={{ margin: "2%" }}>
					<ServiceCard
						cardImage={BirthdaySurpriseImage}
						cardTitle={"Birthday & Surprise Videos"}
						cardParagraph={"Sunt velit ex do ullamco eu magna."}
					/>
					<ServiceCard
						cardImage={WeddingAnniversaryImagee}
						cardTitle={"Wedding Anniversary Videos"}
						cardParagraph={"Sunt velit ex do ullamco eu magna."}
					/>
					<ServiceCard
						cardImage={HouseWarmingVideo}
						cardTitle={"House Warming Videos"}
						cardParagraph={"Sunt velit ex do ullamco eu magna."}
					/>
					<ServiceCard
						cardImage={InvitationCardImage}
						cardTitle={"Invitation Cards"}
						cardParagraph={"Sunt velit ex do ullamco eu magna."}
					/>
					<ServiceCard
						cardImage={PostHumousBirthdayImage}
						cardTitle={"Posthumous Birthday Wishes"}
						cardParagraph={"Sunt velit ex do ullamco eu magna."}
					/>
					<ServiceCard
						cardImage={GraduationVideo}
						cardTitle={"Graduation Celebration Videos"}
						cardParagraph={"Sunt velit ex do ullamco eu magna."}
					/>
				</Row>
			</div>

			<div style={{ backgroundColor: "darkcyan", padding: "5%" }}>
				<h2 className="text-white">
					Ready to surprise someone?{" "}
					<a
						onClick={locateRegister}
						className="text-white"
						style={{ cursor: "pointer" }}
					>
						Try Now
					</a>
				</h2>
			</div>
			<div style={{ backgroundColor: "rgb(37 37 37)", padding: "5%" }}>
				<Row>
					<Col className="text-white" style={{ textAlign: "left" }} sm={4}>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<div>
								<p style={{ fontSize: 14 }}>Sign up for free</p>
								<h4 className="blocked-text">Subscribe to Newsletter</h4>
							</div>
							<div
								style={{ width: 0.5, backgroundColor: "white", height: 100 }}
							></div>
						</div>
					</Col>
					<Col className="text-white justify-content-start">
						<Row>
							<p style={{ fontSize: 14, textAlign: "left" }}>
								Subscribe to stay up to date with our latest news
							</p>
						</Row>
						<Row>
							<Col sm={5}>
								<div
									style={{
										width: "100%",
										// backgroundColor: "red",
										display: "flex",
									}}
								>
									<TextInputComponent placeholder={"Name"} type={"text"} />
								</div>
							</Col>
							<Col sm={5}>
								<div
									style={{
										width: "100%",
										// backgroundColor: "red",
										display: "flex",
									}}
								>
									<TextInputComponent
										placeholder={"Email Address"}
										type={"text"}
									/>
								</div>
							</Col>
							<Col>
								<div style={{ display: "flex", width: "100%" }}>
									<button
										className="btn btn-primary text-white"
										style={{ width: "80%" }}
									>
										Submit
									</button>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
			{events.length < 1 ? (
				<></>
			) : (
				<div className="p-5 d-flex flex-column justify-content-center align-items-center">
					<Row>
						<Col>
							<h1 className="text-dark blocked-text my-3">Events Schedule</h1>
						</Col>
						<div
							className="mb-5"
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								width: "100%",
								// backgroundColor: "red",
								justifyContent: "center",
							}}
						>
							<div
								style={{ backgroundColor: "cyan", width: "20%", height: 3 }}
							></div>
							<IoInfiniteOutline style={{ margin: "1%", color: "cyan" }} />
							<div
								style={{ backgroundColor: "cyan", width: "20%", height: 3 }}
							></div>
						</div>
					</Row>
					{events.map((c, i) => (
						<EventCardComponent
							title={c.event_name}
							description={c.description}
							key={i}
							onClick={() => {
								handleShowModal(c._id);
							}}
							name={c.author}
							time={c.start_time + " - " + c.end_time}
							address={c.venue}
						/>
					))}
				</div>
			)}
			<div className="testimony">
				<Row>
					<Col>
						<h1 className="blocked-text text-white">What Our Clients Say</h1>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center">
					<Col sm={10} className="d-flex justify-content-center">
						<Image fluid={true} src={RibbonImage1} />
					</Col>
				</Row>
				<Row className="mt-5 d-flex justify-content-center">
					<TestimonyCard
						heading={"Testimony heading"}
						message={
							"Enim do tempor veniam cillumnisi pariatur cillum mollit amet commodo. Excepteur nostrud est anim"
						}
						testifier={"Atiaro Tobi"}
					/>
					<TestimonyCard
						heading={"Testimony heading"}
						message={
							"Enim do tempor veniam cillumnisi pariatur cillum mollit amet commodo. Excepteur nostrud est anim"
						}
						testifier={"Atiaro Tobi"}
					/>
					<TestimonyCard
						heading={"Testimony heading"}
						message={
							"Enim do tempor veniam cillumnisi pariatur cillum mollit amet commodo. Excepteur nostrud est anim"
						}
						testifier={"Atiaro Tobi"}
					/>
				</Row>
			</div>
			{blogPosts.length < 1 ? (
				<></>
			) : (
				<div className="p-5">
					<Row>
						<Col>
							<h1 className="blocked-text">Latest From Animestories</h1>
						</Col>
						<div
							className="mb-0"
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								width: "100%",
								// backgroundColor: "red",
								justifyContent: "center",
							}}
						>
							<div
								style={{ backgroundColor: "cyan", width: "10%", height: 3 }}
							></div>
							<IoInfiniteOutline style={{ margin: "1%", color: "cyan" }} />
							<div
								style={{ backgroundColor: "cyan", width: "10%", height: 3 }}
							></div>
						</div>
					</Row>
					<Row className="d-flex justify-content-center">
						{blogPosts.map((c, i) => (
							<NewsCard
								image={c.image}
								key={i}
								onClick={() => {
									locateBlog(c._id);
								}}
								author={c.author}
								date={c.created_date}
								body={c.post}
								title={c.title}
							/>
						))}
					</Row>
				</div>
			)}
			<footer className="bg-dark">
				<Row className="d-flex justify-content-center align-items-center py-5">
					<div className="d-flex justify-content-center align-items-center">
						<div>
							<img src={glassImage} className="fluid" />
						</div>
						<div>
							<h3
								className="text-light curly-text-bold"
								style={{ fontWeigt: "bold" }}
							>
								Animestories
							</h3>
						</div>
					</div>
					<Row className="mt-5">
						<Col sm={12}>
							<h3
								style={{ color: "white", fontSize: 50 }}
								className="curly-text"
							>
								Thanks for Visiting Us
							</h3>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<Image fluid={true} src={SupriseImage3} />
						</Col>
					</Row>
				</Row>
				<Row>
					<div className="py-2">
						<IoLogoFacebook
							// color="white"
							size={25}
							className="m-2 logo-hover"
						/>
						<IoLogoTwitter size={25} className="m-2 logo-hover" />
					</div>
				</Row>
				<Row style={{ backgroundColor: "black" }} className="p-3">
					<div className="text-light">
						© 2023 Animestories. All Rights Reserved
					</div>
				</Row>
			</footer>
			{/* <RoutesComponent /> */}
		</div>
	);
};

export default Home;
