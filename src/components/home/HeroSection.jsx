export default function HeroSection() {
	return (
		<div
			className="h-screen text-white flex justify-center items-center text-center relative"
			style={{
				backgroundImage: 'url("/college.png")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Overlay div to darken the background image */}
			<div
				className="absolute inset-0"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Adjust opacity here
			></div>

			<div className="z-10">
				<div className="uppercase font-medium text-lg md:text-2xl">Welcome to the</div>
				<h1 className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl my-2 md:my-3">Alumni Association</h1>
				<p className="text-sm md:text-lg leading-5 mx-5 lg:mx-40">
					The Alumni Association of Maharaja Surajmal Institute aims at engaging, reminiscing and reconnecting with the fellow alumni of this prestigious institution. We are a one-stop hub to discover events, resources and opportunities related the alma mater. Whether you graduated last year or decades ago, our website serves as a beacon, guiding you back to the heart of our community.
				</p>
				<button className="w-max mx-auto my-3 md:my-5 uppercase px-12 py-4 bg-[#4b39b5] md:text-xl">
					Register
				</button>
			</div>
		</div>
	);
}
