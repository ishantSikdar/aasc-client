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
					Established in 1920, University of El Dorado has long been a home to critical thinking, progressive education, and a conscientious community. This private non-profit university is committed to pushing positive change and creating a caring world for everyone.
				</p>
				<button className="w-max mx-auto my-3 md:my-5 uppercase px-12 py-4 bg-[#4b39b5] md:text-xl">
					Register
				</button>
			</div>
		</div>
	);
}
