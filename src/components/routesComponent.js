import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Register from "./register";

const RoutesComponent = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<Home />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
};

export default RoutesComponent;
