function AboutPage() {
  return (
    <div className="p-4 md:p-16 mt-16">
      <div className=" w-full md:max-w-screen-2xl  mx-auto md:px-20 px-4  bg-[#eae9e9]">
        <p className="md:text-lg md:p-8 text-center">
          The Alumni Association has been created with the vision of fostering
          lifelong connections and celebrating the achievements of our
          esteemed alumni. We serve as a bridge between past, present, and
          future, providing a platform for networking, mentorship, and
          professional growth. We endeavour to foster the legacy of our alma
          mater while also championing the diverse
          accomplishments of our alumni.
        </p>
      </div>
      <div className="mt-8 md:mt-16  md:grid grid-cols-2 gap-20">
        <div>
          <h1 className="text-2xl font-bold text-[#8c2727] col-span-1">
            Vision
          </h1>
          <hr className=" border-[#8c2727] border-solid border-2"></hr>
          <p className="md:text-lg mt-1">
            The vision of an Alumni Association Student Council is to forge a lasting bond between current students and alumni, offering mentorship, networking, and support. It strives to empower students through career guidance, events, and a culture of giving back, fostering a dynamic connection that strengthens both the present and future of the institution.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="text-2xl font-bold text-[#8c2727] col-span-1 ">
            Mission
          </h1>
          <hr className=" border-[#8c2727] border-solid border-2"></hr>
          <p className="md:text-lg mt-1">
            The mission of the Alumni Association Student Council is to represent and advocate for current students, facilitate meaningful connections with alumni, organize events that promote engagement and tradition, and provide resources and support to enhance the student experience.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-[#8c2727] mt-8 md:mt-16">
          Objectives
        </h1>
        <hr className=" border-[#8c2727] border-solid border-2 w-1/2"></hr>
        <p className="md:text-lg mt-1">
          Our objectives include fostering community, networking, mentorship, event organization, professional development, and enhancing institution reputation through alumni achievements.
        </p>
        <div className="m-6 ">
          <ul className="list-disc md:text-lg">
            <li>Serve as a liaison between current students and alumni.</li>
            <li>Foster a sense of community and continuity within the student body.</li>
            <li>Provide networking opportunities for students to connect with alumni.</li>
            <li>Facilitate mentorship programs to support student development.</li>
            <li>Organize events and initiatives to enhance the student experience.</li>
            <li>Promote professional development and career guidance for students.</li>
            <li>Cultivate lifelong connections with the institution among students and alumni.</li>
            <li>Enhancing the reputation and prestige of the institution through alumni achievements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
