import Link from "next/link";
import React from "react";

const index = () => {
	return (
		<div>
			<div className="text-xl">this is about</div>
			<Link href="/">
				<div className="text-xl">home</div>
			</Link>
		</div>
	);
};

export default index;
