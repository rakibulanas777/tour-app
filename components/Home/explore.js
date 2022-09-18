import Typewriter from "typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "autoprefixer";

const Explore = ({ image }) => {
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
				{post.map((images) => {
					<img src={images.image} alt="" srcset="" />;
				})}
			</div>
		</div>
	);
};

export default Explore;
