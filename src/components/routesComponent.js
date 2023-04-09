import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import BlogPostPage from "./blogPostPage";
import GalleryPage from "./galleryPage";

const RoutesComponent = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/blog" element={<BlogPostPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
			</Routes>
		</div>
	);
};

export default RoutesComponent;
