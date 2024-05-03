import { useEffect, useRef, useState } from "react";

export default function StudentCouncilCard({ photo, isMobile, name, position, linkedin, instagram }) {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (isMobile) {
            const checkIfInView = () => {
                const windowHeight = window.innerHeight;
                const topBound = window.scrollY;
                const bottomBound = topBound + windowHeight;
                const element = elementRef.current;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;

                    setIsInView(elementBottom < bottomBound && elementTop > topBound);
                }
            };

            window.addEventListener('scroll', checkIfInView);
            checkIfInView();

            return () => {
                window.removeEventListener('scroll', checkIfInView);
            };
        }
    }, [isMobile]);

    return (
        <div ref={elementRef} className="relative w-[300px] h-[410px] bg-[#EEEBE8] flex flex-col justify-between items-center overflow-hidden group">
            <img src={photo} alt={name} className="absolute w-full h-full object-cover" />
            <div className={`absolute top-0 flex flex-col gap-2 text-white text-4xl p-2 transition-all duration-300 ${isInView ? 'right-0' : '-right-14'} ${!isMobile ? 'group-hover:right-0' : '-right-14'}`}>
                <a href={instagram}><img src={`/instagram.png`} alt={instagram} className="w-10" /></a>
                <a href={linkedin}><img src={`/linkedin.png`} alt={linkedin} className="w-10" /></a>
            </div>
            <div className="absolute bottom-2 right-2 flex flex-col items-end bg-[#f5f5f5]/[0.6] p-2">
                <h3 className="text-[#853333] font-bold text-3xl">{name}</h3>
                <div className="uppercase text-xl font-extrabold">{position}</div>
            </div>
        </div>
    )
}
