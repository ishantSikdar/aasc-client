import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { ROUTE_ABOUT, ROUTE_EXE_COUNCIL, ROUTE_EVENTS, ROUTE_GALLERY, ROUTE_AASC_COUNCIL } from "../../constants/routes";

export default function Footer() {
	return (
		<div className="bg-[#272727] text-white text-md md:text-xl">

			{/* Upper container */}
			<div className="flex md:flex-row justify-between xl:justify-around p-9 md:py-10 xl:pb-0">

				{/* Left Upper */}
				<div className="w-[33%] flex flex-col">
					<h3 className="font-bold uppercase text-xl">Contact Us</h3>
					<Link to={ROUTE_ABOUT} className="hover:underline cursor-pointer">About Us</Link>
					<Link to={ROUTE_EXE_COUNCIL} className="hover:underline cursor-pointer">Executive Council</Link>
					<Link to={ROUTE_AASC_COUNCIL} className="hover:underline cursor-pointer">Student Council</Link>
					<Link to={ROUTE_EVENTS} className="hover:underline cursor-pointer">Events</Link>
					<Link to={ROUTE_GALLERY} className="hover:underline cursor-pointer">Gallery</Link>
				</div>

				{/* Right Upper */}
				<div className="w-[60%] md:w-[33%] xl:w-[20%]">
					<div>Maharaja Surajmal Institute Janakpuri East, ST 12345</div>
					<div><FontAwesomeIcon icon={faEnvelope} /> msijanakpuri.com</div>
					<div><FontAwesomeIcon icon={faPhone} /> 123-456-7890</div>
				</div>
			</div>

			{/* Bottom Container */}
			<div className="p-10 md:pt-0">
				<div className="flex gap-4 justify-center align-center my-2">
					<a href={`https://www.linkedin.com/company/alumni-association-student-council/`}><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
					<a href={`https://www.instagram.com/msi_alumni_association`}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
					<a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
				</div>
				<div className="text-center">© Created by Tech-Team of Alumni Association Student Council</div>
			</div>
		</div>
	)
}