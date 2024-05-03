export default function StudentCouncilCard({ photo, name, position, linkedin, instagram }) {
    return (
        <div className="p-4 w-[300px] h-[400px] bg-[#EEEBE8] rounded-xl flex flex-col justify-between items-center">
            <img src={photo} alt="" className="w-[200px] h-[250px] object-cover" />
            <div className="flex flex-col gap-[1px]">
                <h3 className="text-[#853333] font-bold text-3xl">{name}</h3>
                <div className="w-full h-1 bg-[#853333]"></div>
            </div>
            <div className="uppercase text-xl font-extrabold">{position}</div>
            <div className="flex gap-4 text-4xl">
                <a href={linkedin}><img src="/linkedin.png" alt="" className="w-7" /></a>
                <a href={instagram}><img src="/instagram.png" alt="" className="w-7" /></a>
            </div>
        </div>
    )
}