import HeaderComponent from "./headerComponent";
import { Button, Col, Row } from "react-bootstrap";
import { IoInfiniteOutline } from "react-icons/io5";
import TextInputComponent from "./textInputComponent";
import { Link } from "react-router-dom";
import { BlobServiceClient } from "@azure/storage-blob";
import React from "react";
import { useState } from "react";
import FileCardComponent from "./fileCardComponent";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
const characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const PaymentSuccessfulPage = () => {
	const config = {
		reference: generateString(20),
		email: "animizstories@gmail.com",
		amount: 50 * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
		publicKey: "pk_live_186a3af7bf9c942e1444dd656f7994ba4b078460",
	};

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [celebration, setCelebration] = useState("");
	const [address, setAddress] = useState("");
	const [description, setDescription] = useState("");
	const [imageArray, setImageArray] = useState([]);
	const [newImageArray, setNewImageArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// program to generate random strings

	// declare all characters

	function generateString(length) {
		let result = " ";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}

		return result;
	}

	const onChangeFirstname = (e) => {
		setFirstname(e.target.value);
	};
	const onChangeLastname = (e) => {
		setLastname(e.target.value);
	};
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const onChangePhone = (e) => {
		setPhone(e.target.value);
	};
	const onChangeCelebration = (e) => {
		setCelebration(e.target.value);
	};
	const onChangeAddress = (e) => {
		setAddress(e.target.value);
	};
	const onChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const blobService = new BlobServiceClient(process.env.REACT_APP_SAS_URL);
	const containerClient = blobService.getContainerClient(
		process.env.REACT_APP_STORAGE_CONTAINER_NAME,
	);

	const createBlobInContainer = async (file) => {
		// create blobClient for container
		const blobClient = containerClient.getBlockBlobClient(file.name);

		// set mimetype as determined from browser with file upload control
		const options = { blobHTTPHeaders: { blobContentType: file.type } };

		// upload file
		const upload = await blobClient.uploadData(file, options);
		// console.log(upload._response.status);
		if (upload._response.status === 201) {
			return true;
		}
		return false;
	};

	const uploadButtonHandler = async (file) => {
		if (!file) return;
		setImageArray([...imageArray, file]);
		// file = "";
		// upload file
		// await createBlobInContainer(file);
	};
	// console.log(imageArray);

	const hiddenFileInput = React.useRef(null);

	const uploadHandler = (e) => {
		hiddenFileInput.current.click();
		e.target.value = "";
	};

	const onCancelFileHandler = (fileName) => {
		setImageArray(imageArray.filter((c) => c.name !== fileName));
		// console.log("cancel");
	};

	const checkString = (string) => {
		if (string.length < 1) {
			setIsLoading(false);
			return false;
		}
		setIsLoading(false);
		return true;
	};
	const initializePayment = usePaystackPayment(config);

	const makePayment = () => {
		initializePayment(
			() => {
				orderAndPayHandler();
			},
			() => {
				// console.log("")
				setErrorMessage("payment failed");
			},
		);
	};

	const orderAndPayHandler = async () => {
		setIsLoading(true);
		// console.log(encodeURIComponent("i am coming"));
		// upload all images in array to azure and push file links to a newImageArray State
		// proceed to payment
		// if successful, upload order to database

		const dataArray = [];
		for (let i = 0; i < imageArray.length; i++) {
			const uploadFile = await createBlobInContainer(imageArray[i]);
			if (!uploadFile) {
				setIsLoading(false);
				throw "error uploading data";
			}
			dataArray.push(
				process.env.REACT_APP_FILE_URL + encodeURIComponent(imageArray[i].name),
			);
		}
		setNewImageArray(newImageArray);
		// console.log("uploaded");
		if (!checkString(firstname)) setErrorMessage("missing firstname field");
		else if (!checkString(lastname)) setErrorMessage("missing lastname field");
		else if (!checkString(email)) setErrorMessage("missing email field");
		else if (!checkString(phone)) setErrorMessage("missing phone field");
		else if (!checkString(celebration))
			setErrorMessage("missing celebration field");
		else if (!checkString(address)) setErrorMessage("missing address field");
		else if (!checkString(description))
			setErrorMessage("missing description field");
		else if (!checkString(dataArray)) setErrorMessage("no pictures selected!");
		else {
			setErrorMessage("");
			let data = JSON.stringify({
				lastname: lastname,
				firstname: firstname,
				email: email,
				celebration: celebration,
				pictures: dataArray,
				description: description,
				phone: phone,
				address: address,
			});

			let config = {
				method: "post",
				maxBodyLength: Infinity,
				url: process.env.REACT_APP_API_URL + "contact",
				headers: {
					"Content-Type": "application/json",
				},
				data: data,
			};

			axios
				.request(config)
				.then((response) => {
					console.log(JSON.stringify(response.data));

					setIsLoading(false);
				})
				.catch((error) => {
					// console.log(error.response.data.message.errors.message);
					setIsLoading(false);
					setErrorMessage("Network Error");
				});
		}
	};

	return (
		<div>
			<HeaderComponent />
			<div className="bg-light-grey p-2 d-flex align-items-center">
				<Link
					to={"/home"}
					className="me-2 p-2 bg-dark text-light rounded"
					style={{ textDecoration: "none" }}
				>
					Home
				</Link>{" "}
				/ Book
			</div>
			<div>
				<div>
					<Row className="mt-5">
						<Col>
							<h1 className="blocked-text">Package Form</h1>
						</Col>
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
							<IoInfiniteOutline
								style={{ marginLeft: "1%", marginRight: "1%", color: "cyan" }}
							/>
							<div
								style={{ backgroundColor: "cyan", width: "7%", height: 3 }}
							></div>
						</div>
					</Row>
				</div>
				<label className="text-danger">{errorMessage}</label>
				<div className="d-flex justify-content-center my-5">
					<Row className="bg-light-grey shadow w-75 p-3 d-flex justify-content-center">
						<Col sm={5} className="mt-3">
							<TextInputComponent
								onChange={onChangeFirstname}
								withBorder={true}
								placeholder={"First Name"}
							/>
						</Col>
						<Col sm={5} className="mt-3">
							<TextInputComponent
								onChange={onChangeLastname}
								withBorder={true}
								placeholder={"Last Name"}
							/>
						</Col>
						<Col sm={5} className="mt-3">
							<TextInputComponent
								onChange={onChangeEmail}
								withBorder={true}
								placeholder={"Email"}
							/>
						</Col>

						<Col sm={5} className="mt-3">
							<TextInputComponent
								onChange={onChangePhone}
								withBorder={true}
								placeholder={"Phone Number"}
							/>
						</Col>
						<Col sm={5} className="mt-3">
							<TextInputComponent
								onChange={onChangeAddress}
								withBorder={true}
								placeholder={"Physical Address"}
							/>
						</Col>
						<Col sm={5} className="mt-3">
							<select
								onChange={onChangeCelebration}
								style={{
									width: "100%",
									padding: "3%",
									borderRadius: 5,
									borderWidth: 0.5,
									outline: "none",
									borderColor: "rgb(230 230 230)",
								}}
							>
								<option value={""}>Select type</option>
								<option value="birthday">Birthday</option>
								<option value="marriage">Marriage</option>
								<option value="wedding">Wedding</option>
								<option value="funeral">Funeral</option>
							</select>
						</Col>

						<Col sm={5} className="mt-3">
							<textarea
								onChange={onChangeDescription}
								placeholder="Describe what you want"
								style={{
									width: "100%",
									padding: "3%",
									borderRadius: 5,
									borderWidth: 0.5,
									outline: "none",
									borderColor: "rgb(230 230 230)",
								}}
							/>
						</Col>
						<Col sm={10} className="mt-3">
							<Button style={{ width: "100%" }} onClick={uploadHandler}>
								Select Files
							</Button>
							<input
								ref={hiddenFileInput}
								onChange={(e) => {
									// console.log(e.target.files[0]);
									uploadButtonHandler(e.target.files[0]);
								}}
								type={"file"}
								style={{
									display: "none",
									width: "100%",
									padding: "3%",
									borderRadius: 5,
									borderWidth: 0.5,
									outline: "none",
									borderColor: "rgb(230 230 230)",
								}}
							/>
							{/* <ReactImagePickerEditor config={config2} /> */}
						</Col>
						<Col sm={10} className="mt-3">
							<h5>Selected Files</h5>
							<hr />
							<Row style={{ justifyContent: "space-around" }}>
								{imageArray.length < 1
									? "No files Selected yet"
									: imageArray.map((c, i) => (
											<FileCardComponent
												key={i}
												file={c.name}
												onCancel={() => {
													onCancelFileHandler(c.name);
												}}
											/>
									  ))}
							</Row>
						</Col>
						<Col sm={10} className="mt-3">
							<Button
								style={{ width: "100%" }}
								disabled={isLoading}
								// onClick={orderAndPayHandler}
								onClick={makePayment}
							>
								{isLoading ? "Please wait..." : "Order and Pay"}
							</Button>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default PaymentSuccessfulPage;
