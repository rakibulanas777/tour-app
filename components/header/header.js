import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item h-[85vh] relative w-full">
				<Image
					alt="Mountains"
					src="/images/header/header_bg1.jpg"
					layout="fill"
					className=""
					objectFit="cover"
					quality={100}
				/>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle btn-primary">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle btn-primary">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item h-[85vh] relative w-full">
				<Image
					alt="Mountains"
					src="/images/header/header_bg2.jpg"
					layout="fill"
					className="h-screen"
					objectFit="cover"
					quality={100}
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle btn-primary">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle btn-primary">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item  h-[85vh] relative w-full">
				<Image
					alt="Mountains"
					src="/images/header/header_bg3.jpg"
					layout="fill"
					className="h-screen"
					objectFit="cover"
					quality={100}
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle btn-primary">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle btn-primary">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative h-[85vh] w-full">
				<Image
					alt="Mountains"
					src="/images/header/header_bg4.jpg"
					layout="fill"
					className="h-screen"
					objectFit="cover"
					quality={100}
				/>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="btn btn-circle btn-primary">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle btn-primary">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
