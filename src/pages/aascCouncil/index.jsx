import StudentCouncilCard from "../../components/common/StudentCouncilCard";
import STUDENT_COUNCIL from "../../constants/aascCouncil/studentCouncilDetails.js";

export default function AascCouncilPage({ isMobile }) {
    // const shuffledStudentCouncil = STUDENT_COUNCIL.sort(() => Math.random() - 0.5);
    return <div className="my-20 flex flex-col gap-10 md:px-10">
        <div className="text-[#853333] text-center  flex flex-col items-center gap-2 md:mt-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">Alumni Association Student Council</h2>
            <div className="h-1 w-[70%] lg:w-[58%]  bg-[#853333]"></div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-16 xl:gap-5 justify-center items-center">
            {STUDENT_COUNCIL.map((student) => (
                <StudentCouncilCard
                    key={student.id}
                    isMobile={isMobile}
                    photo={student.photo}
                    name={student.name}
                    instagram={student.instagram}
                    linkedin={student.linkedin}
                    position={student.position}
                />
            ))}
        </div>

    </div>
}