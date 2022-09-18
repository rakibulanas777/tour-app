import React from "react";
import Explore from "./Home/explore";
import Footer from "./shared/footer";
import Navbar from "./shared/navbar";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
