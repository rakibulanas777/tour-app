import React from "react";
import Typewriter from "typewriter-effect";
const Explore = () => {
	return (
		<div className="explore py-8">
			<div className="text-2xl font-bold text-center text-slate-">
				<Typewriter
					options={{
						strings: ["Let's explore the world toghter"],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
		</div>
	);
};

export default Explore;
