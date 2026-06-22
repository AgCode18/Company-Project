import React from 'react'
import { useState } from 'react'
import Header from '../components/Header/Header.jsx'
import {
  Star,
  BarChart3,
  Globe,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";
import { ArrowUpRight } from "lucide-react";



export default function AboutPage() {

    
  const [marketing, setMarketing] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const cards = [
    {
      title: "History",
      description:
        "Established in 1981, Infosys is a NYSE listed global consulting company.",
    },
    {
      title: "Subsidiaries",
      description:
        "Infosys has made strategic investments in different domains and industries.",
    },
    {
      title: "Management",
      description:
        "View profiles of top Executives and Members of the Infosys leadership.",
    },
    {
      title: "Alliances",
      description:
        "Our network of alliance and teaming relationships creates value.",
    },
    {
      title: "Corporate Governance",
      description:
        "At Infosys, the goal of corporate governance is to ensure fairness.",
    },
    {
      title: "Investor Relations",
      description:
        "News and events, investor calendar, presentations and analyst updates.",
    },
  ];
  const stats = [
    {
      icon: <Star size={24} />,
      value: "40+",
      label: "Years of Service",
    },
    {
      icon: <BarChart3 size={24} />,
      value: (
        <>
          <span className="text-2xl align-top">US$</span>{" "}
          <span>20.2</span>
          <span className="text-2xl align-top">BN</span>
        </>
      ),
      label: "Total Revenue (LTM)",
    },
    {
      icon: <Globe size={24} />,
      value: "59",
      label: "Countries We Are Present In",
    },
    {
      icon: <UserRound size={24} />,
      value: "328K+",
      label: "Employees",
    },
    {
      icon: <BriefcaseBusiness size={24} />,
      value: "1,965",
      label: "Trusting Clients",
    },
  ];
  return (
    <>

    <Header />

    <section
        className="relative py-24 overflow-hidden bg-[#f3f4fb]"
        style={{
          backgroundImage:
            "url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/pattern-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Top Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left */}
            <h2 className="text-6xl lg:text-7xl font-medium text-[#111827] leading-none">
              Our <br />
              Purpose:
            </h2>

            {/* Right */}
            <p className="text-2xl lg:text-[24px] leading-relaxed text-[#222] font-normal">
              To amplify human potential and create the next opportunity for
              people, businesses and communities
            </p>
          </div>

          {/* Video Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Purpose Video"
                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Play Button */}
              {/* <div className="absolute inset-0 flex items-center justify-center"> */}
                {/* <div className="w-28 h-28 rounded-full bg-cyan-500/90 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg> */}
                {/* </div> */} 
              {/* </div> */}
            </div>

            {/* Card 2 */}
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
                alt="About Why"
                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/20" /> */}

              {/* Play Button */}
              {/* <div className="absolute inset-0 flex items-center justify-center"> */}

                {/* Video 2 */}
                {/* <div className="w-28 h-28 rounded-full bg-cyan-500/90 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div> */}
              {/* </div> */}

              {/* Bottom Text */}
              
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Heading */}
          <h2 className="text-6xl font-semibold text-[#000000] mb-16">
            Overview
          </h2>

          {/* Top Content */}
          <div className="grid lg:grid-cols-2 gap-20 mb-24">
            {/* Left */}
            <h3 className="text-[34px] lg:text-[40px] leading-tight  text-[#000000]">
              Infosys is a global leader in next-generation digital services
              and consulting. We enable clients in 59 countries to navigate
              their digital transformation.
            </h3>

            {/* Right */}
            <div>
              <p className="text-md text-[#3c3c3c]">
                With over four decades of experience in managing the systems
                and workings of global enterprises, we expertly steer clients,
                in 59 countries, as they navigate their digital transformation
                powered by cloud and AI
                We enable them with an AI-first core, empower the business
                with agile digital at scale and drive continuous improvement
                with always-on learning through the transfer of digital
                skills, expertise, and ideas from our innovation ecosystem.
                We are deeply committed to being a well-governed,
                environmentally sustainable organization where diverse
                talent thrives in an inclusive workplace.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-20">
            {stats.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#e8e1f8] flex items-center justify-center text-[#7d59b2] flex-shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-6xl font-light text-[#202020] leading-none">
                    {item.value}
                  </h4>

                  <p className="mt-3 text-2xl text-[#3b3b3b]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-[#e8edf6] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-5xl font-light text-center text-[#000000] mb-16">
            About Us
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                group
                bg-white
                rounded-3xl
                p-8
                min-h-[260px]
                flex
                flex-col
                justify-between
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                cursor-pointer
              "
              >
                {/* Title */}
                <h3
                  className="
                  text-[20px]
                  font-medium
                  text-[#10154d]
                  transition-colors
                  duration-300
                  group-hover:text-[#3557ff]
                "
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-10 text-[18px] leading-9 text-[#10154d]">
                  {card.description}
                </p>

                {/* Know More */}
                <div
                  className="
                  flex
                  justify-end
                  mt-8
                  opacity-0
                  translate-y-5
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
                >
                  <div className="relative inline-flex items-center gap-1 text-[#10154d] text-[18px] font-medium">
                    Know More

                    {/* <ArrowUpRight size={20} /> */}

                    {/* Animated Underline */}
                    <span
                      className="
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      bg-current
                      w-full
                      scale-x-0
                      origin-right
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    <section
  className="relative py-20 px-4 lg:px-10 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=2000&auto=format&fit=crop&q=80')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />

  <div className="relative max-w-[1700px] mx-auto grid lg:grid-cols-[420px_1fr] gap-12 items-start">
    {/* Left Content */}
    <div className="text-white pt-2">
      <h2 className="text-5xl lg:text-7xl font-light leading-none">
        Request for
        <br />
        services
      </h2>

      <p className="mt-10 text-xl leading-10 text-gray-200 max-w-md">
        Find out more about how we can help your organization navigate its
        next. Let us know your areas of interest so that we can serve you
        better.
      </p>
    </div>

    {/* Form Card */}
    <div className="bg-[#f8f8f8] rounded-[24px] p-8 lg:p-12 shadow-2xl">
      <h3 className="text-[#1B0A42] text-2xl mb-10">
        All the fields are required
      </h3>

      {/* Inputs */}
      <div className="grid w-full md:grid-cols-2 gap-7">
        {/* First Name */}
        <div className="relative group">
          <input
            type="text"
            placeholder="First Name *"
            className="w-full bg-[#F0F5FD] p-5 rounded-lg outline-none placeholder:text-black"
            required
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
        </div>

        {/* Last Name */}
        <div className="relative group">
          <input
            type="text"
            placeholder="Last Name *"
            className="w-full bg-[#F0F5FD] p-5 rounded-lg outline-none placeholder:text-black"
            required
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
        </div>

        {/* Email */}
        <div className="relative group">
          <input
            type="email"
            placeholder="Email *"
            className="w-full bg-[#F0F5FD] p-5 rounded-lg outline-none placeholder:text-black"
            required
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
        </div>

        {/* Company */}
        <div className="relative group">
          <input
            type="text"
            placeholder="Company *"
            className="w-full bg-[#F0F5FD] p-5 rounded-lg outline-none placeholder:text-black"
            required
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
        </div>

        {/* Job Title */}
        <div className="relative group">
          <input
            type="text"
            placeholder="Job Title *"
            className="w-full bg-[#F0F5FD] p-5 rounded-lg outline-none placeholder:text-black"
            required
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
        </div>

        {/* Phone */}
        <div className="relative group">
          <input
            type="tel"
            placeholder="Phone"
            className="w-full bg-[#F0F5FD] p-5 rounded-lg outline-none placeholder:text-black"
          />
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
        </div>
      </div>

      {/* Message */}
      <div className="relative group mt-8">
        <label className="block text-xl text-black mb-3">
          Message
        </label>

        <textarea
          rows={5}
          placeholder="Write your message..."
          className="w-full bg-[#F0F5FD] rounded-xl p-5 outline-none resize-none placeholder:text-black"
        />

        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1B0A42] origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
      </div>

      {/* Marketing Toggle */}
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setMarketing(!marketing)}
          className={`relative w-14 h-8 rounded-full transition ${
            marketing ? "bg-[#1B0A42]" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
              marketing ? "left-7" : "left-1"
            }`}
          />
        </button>

        <p className="text-lg lg:text-xl text-[#1B0A42]">
          Opt in for marketing communication{" "}
          <span className="underline cursor-pointer hover:text-blue-700 transition">
            Privacy Statement
          </span>
        </p>
      </div>

      {/* Privacy Toggle */}
      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setPrivacy(!privacy)}
          className={`relative w-14 h-8 rounded-full transition ${
            privacy ? "bg-[#1B0A42]" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
              privacy ? "left-7" : "left-1"
            }`}
          />
        </button>

        <p className="text-lg lg:text-xl text-[#1B0A42]">
          I agree to the{" "}
          <span className="underline cursor-pointer hover:text-blue-700 transition">
            Privacy Statement
          </span>
          <sup>*</sup>
        </p>
      </div>

      {/* Submit Button */}
      <button className="group mt-10 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl text-xl hover:bg-[#202021] transition-all duration-300">
        Submit

        {/* <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span> */}
      </button>
    </div>
  </div>
</section>

    
    </>
  )
}
