import HeaderComponent from "./headerComponent";
import { Button, Col, Row, Modal, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SupriseImage3 from "../images/sp2.png";
import glassImage from "../images/glass.png";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";

const GalleryPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [gallery, setGallery] = useState([]);

	const getGallery = (req, res) => {
		let config = {
			method: "get",
			maxBodyLength: Infinity,
			url: process.env.REACT_APP_API_URL + "gallery",
			headers: {},
		};

		axios
			.request(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				setGallery(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		getGallery();
	}, []);

	return (
		<div>
			{/* <Modal
				show={showModal}
				onHide={handleClose}
				className="d-flex justify-content-center text-center"
			>
				<div>
					<IoCheckmarkCircle className="text-info" size={100} />
				</div>
				<Modal.Body className="text-alert">Payment Successful!</Modal.Body>
				<div className="">
					<div className="d-flex justify-content-around py-2">
						<Button variant="secondary" onClick={handleClose} className="w-75">
							Go Back
						</Button>
					</div>
				</div>
			</Modal> */}
			<HeaderComponent />
			<div className="bg-light-grey p-2 d-flex align-items-center">
				<Link
					to={"/home"}
					className="me-2 p-2 bg-dark text-light rounded"
					style={{ textDecoration: "none" }}
				>
					Home
				</Link>{" "}
				/ Gallery
			</div>
			<div>
				<div>
					<Row className="mt-5">
						<Col>
							<h1 className="blocked-text">Design Porfolio</h1>
						</Col>
					</Row>
				</div>
				<div className="d-flex justify-content-center my-5">
					<Row
						className="bg-light-grey w-75 p-3 justify-content-center"
						style={{ textAlign: "justify" }}
					>
						{gallery.map((c, i) => (
							<Col sm={4} key={i}>
								<img className="img-fluid mt-3" src={c.image} />
							</Col>
						))}
					</Row>
				</div>
			</div>
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
						© 2022 Animestories. All Rights Reserved
					</div>
				</Row>
			</footer>
		</div>
	);
};

export default GalleryPage;
