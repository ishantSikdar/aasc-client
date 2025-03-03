import { useEffect } from "react";

function AboutPage() {
  // Change bg color of page to bg-gray-100 so that consistency in navbar color
  useEffect(() => {
    document.querySelector("html").classList.add("bg-gray-100");
    // This function is called when the component is unmounted, ie another page is loaded
    return () => {
      document.querySelector("html").classList.remove("bg-gray-100");
    };
  }, []);

  return (
    <div className="p-6 md:p-20 mt-16 bg-gray-100">
      {/* About Section */}
      <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-lg text-center">
        <p className="text-lg md:text-xl font-light text-gray-600">
          The Alumni Association has been created with the vision of fostering
          lifelong connections and celebrating the achievements of our esteemed
          alumni. We serve as a bridge between past, present, and future,
          providing a platform for networking, mentorship, and professional
          growth. We endeavour to foster the legacy of our alma mater while also
          championing the diverse accomplishments of our alumni.
        </p>
      </div>
      {/* Vision & Mission Section */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-20 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-6 md:p-10 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-[#8c2727]">Vision</h2>
          <div className="w-16 h-1 bg-[#8c2727] my-3"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            The vision of an Alumni Association Student Council is to forge a
            lasting bond between current students and alumni, offering
            mentorship, networking, and support. It strives to empower students
            through career guidance, events, and a culture of giving back,
            fostering a dynamic connection that strengthens both the present and
            future of the institution.
          </p>
        </div>
        <div className="bg-white p-6 md:p-10 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-[#8c2727]">Mission</h2>
          <div className="w-16 h-1 bg-[#8c2727] my-3"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            The mission of the Alumni Association Student Council is to
            represent and advocate for current students, facilitate meaningful
            connections with alumni, organize events that promote engagement and
            tradition, and provide resources and support to enhance the student
            experience.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 md:mt-20 bg-white p-8 md:p-12 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-[#8c2727] text-center">Objectives</h2>
        <div className="w-24 h-1 bg-[#8c2727] mx-auto my-3"></div>
        <p className="text-lg text-gray-700">
          Our objectives include fostering community, networking, mentorship,
          event organization, professional development, and enhancing
          institution reputation through alumni achievements.
        </p>
        <div className='m-6 '>
        <ul className="mt-6 space-y-1 text-lg text-gray-700 list-disc pl-6">
            <li>Serve as a liaison between current students and alumni.</li>
            <li>
              Foster a sense of community and continuity within the student
              body.
            </li>
            <li>
              Provide networking opportunities for students to connect with
              alumni.
            </li>
            <li>
              Facilitate mentorship programs to support student development.
            </li>
            <li>
              Organize events and initiatives to enhance the student experience.
            </li>
            <li>
              Promote professional development and career guidance for students.
            </li>
            <li>
              Cultivate lifelong connections with the institution among students
              and alumni.
            </li>
            <li>
              Enhancing the reputation and prestige of the institution through
              alumni achievements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
