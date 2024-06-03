import aaec from "../../constants/teamData/committeeData.json";

export default function AlumniCommittee() {
  const firstFour = aaec.filter((aaecData) => {
    return aaecData.designation !== "Executive Member";
  });

  const SecondOne = aaec.filter((item) => item.id === "5" || item.id === "6");
  const SecondTwo = aaec.filter((item) => item.id === "7" || item.id === "8");

  return (
    <>
      <div className="mt-24 flex justify-center w-full text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold underline text-orange-800 text-center">
          ALUMNI COMMITTEE
        </h1>
      </div>

      {firstFour.map((data1) => (
        <div
          className="mx-4 mt-5 md:mt-10 h-auto bg-gray-100 flex flex-col md:flex-row "
          key={data1.id}
        >
          <div className="text-center p-4 md:p-7">
            <img
              src={data1.img}
              className=" md:w-full"
              alt="Background"
            />
            <h1 className="text-xl md:text-2xl font-semibold text-orange-800 mt-2">
              {data1.name}
            </h1>
          </div>
          <div className="p-4 md:p-7">
            <div className="text-xl md:text-2xl font-bold underline text-orange-800">
              {data1.designation}
            </div>
      
            <div>
              <p className="text-sm md:text-base leading-relaxed mt-2">
                {data1.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* --------------------------------- */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        {SecondOne.map((data2) => (
          <div className="bg-gray-100 m-5 md:w-1/2" key={data2.id}>
            <div className="text-2xl text-center mt-6 font-bold underline text-orange-800">
              {data2.designation}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-center p-7">
                <img src={data2.img} className="w-full" alt="Profile" />
                <h1 className="text-2xl pt-4 font-semibold text-orange-800">
                  {data2.name}
                </h1>
              </div>
              <div className=" m-auto  text-center md:text-start">
              
                <p>{data2.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* -------------------------------------------- */}

      <div className="flex flex-col md:flex-row justify-center items-center">
        {SecondTwo.map((data2) => (
          <div className="bg-gray-100 m-5 md:w-1/2" key={data2.id}>
            <div className="text-2xl text-center mt-6 font-bold underline text-orange-800">
              {data2.designation}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-center p-7">
                <img src={data2.img} className="md:w-full" alt="Profile" />
                <h1 className="text-2xl pt-4 font-semibold text-orange-800">
                  {data2.name}
                </h1>
              </div>
              <div className=" m-auto  text-center md:text-start">
             
                <p>{data2.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
