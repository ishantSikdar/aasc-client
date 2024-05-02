import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function StudentCouncilCard({ photo, name, position, linkedin, instagram }) {
    return (
        <div className="p-4 w-[300px] h-[410px] bg-[#EEEBE8] rounded-3xl flex flex-col justify-between items-center">
            <img src={photo} alt="" className="w-[200px] h-[250px] object-cover p-2" />
            <div className="flex flex-col gap-1">
                <h3 className="text-[#853333] font-bold text-3xl">{name}</h3>
                <div className="w-full h-1 bg-[#853333]"></div>
            </div>
            <div className="uppercase text-xl font-extrabold">{position}</div>
            <div className="flex gap-4 text-4xl">
                <a href={linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={instagram}><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    )
}