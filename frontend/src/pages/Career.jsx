import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Users,
  Laptop,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header/Header.jsx";

function CareerPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Delhi",
      type: "Full Time",
      experience: "1-3 Years",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full Time",
      experience: "2-4 Years",
    },
    {
      title: "Full Stack Developer",
      location: "Noida",
      type: "Full Time",
      experience: "1-4 Years",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full Time",
      experience: "1-3 Years",
    },
    {
      title: "React Native Developer",
      location: "Hybrid",
      type: "Full Time",
      experience: "2+ Years",
    },
    {
      title: "Digital Marketing Executive",
      location: "Remote",
      type: "Full Time",
      experience: "1-2 Years",
    },
  ];

  const perks = [
    {
      icon: <Laptop size={40} />,
      title: "Flexible Work",
      desc: "Remote & hybrid working options with work-life balance.",
    },
    {
      icon: <Users size={40} />,
      title: "Amazing Team",
      desc: "Work with passionate developers and creative designers.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Career Growth",
      desc: "Continuous learning and rapid professional development.",
    },
  ];

  return (
    <>

    <Header />
        {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E0A42] via-[#1B0A42] to-[#33246d] py-32">

        <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl -top-20 -left-20 animate-pulse"></div>

        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl -bottom-32 -right-20 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="bg-white/10 px-6 py-2 rounded-full text-white">
            🚀 Join Our Team
          </span>

          <h1 className="text-white text-6xl lg:text-8xl font-bold mt-8">
            Build The
            <br />
            Future With Us
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mt-8 leading-9">
            We're building innovative digital products and looking for
            passionate people to grow with us.
          </p>

          <Link
            to="#jobs"
            className="inline-flex mt-10 bg-white text-[#1B0A42] px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300"
          >
            Explore Openings
          </Link>
        </div>
      </section>

      {/* Why Join */}

      <section className="py-24 bg-[#F5F7FB]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#0E0A42]">
              Why Join Us?
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              We create an environment where talented people thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {perks.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#EEF3FA] flex items-center justify-center text-[#1B0A42] group-hover:rotate-12 transition duration-500">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[#0E0A42]">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#0E0A42]">
              Meet Our Team
            </h2>

            <p className="mt-5 text-gray-600">
              Creative minds working together every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group rounded-3xl overflow-hidden shadow-lg bg-white hover:-translate-y-3 transition duration-500"
              >
                <div className="overflow-hidden">

                  <img
                    src={`https://picsum.photos/500/600?random=${item}`}
                    alt=""
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#0E0A42]">
                    Team Member
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Software Engineer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}

      <section
        id="jobs"
        className="py-24 bg-[#EEF3FA]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#0E0A42]">
              Open Positions
            </h2>

            <p className="mt-5 text-gray-600">
              Find your next opportunity.
            </p>
          </div>

          <div className="space-y-8 mt-16">

            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col lg:flex-row justify-between items-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              >
                <div>

                  <div className="flex items-center gap-3">

                    <Briefcase
                      className="text-[#1B0A42]"
                      size={24}
                    />

                    <h3 className="text-3xl font-bold text-[#0E0A42]">
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-5 text-gray-500">

                    <span>📍 {job.location}</span>

                    <span>💼 {job.type}</span>

                    <span>⭐ {job.experience}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  state={{
                    job: job.title,
                  }}
                  className="group relative overflow-hidden mt-8 lg:mt-0 px-8 py-4 rounded-full bg-[#1B0A42] text-white"
                >
                  <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500"></span>

                  <span className="relative flex items-center gap-2 group-hover:text-[#1B0A42]">
                    Apply Now
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerPage;

