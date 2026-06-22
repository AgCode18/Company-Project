import React from "react";

export default function Services() {
  const services = [
    "Services",
    "Financial Services",
    "Industrial Manufacturing",
    "Utilities",
    "Insurance",
    "Oil and Gas",
    "Healthcare",
    "Consumer Products",
    "Energy Transition",
    "Life Sciences",
    "Retail & Logistics",
    "Communications Services",  
  ];

  return (
    <section className="bg-[#d9dee8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#1B1654]">
            Industries and Services
          </h2>

          <p className="mt-6 text-xl leading-10 text-black">
            As strategic advisors, we build programs that help enterprises
            operate stronger today and prepare for tomorrow.
          </p>
        </div>

        {/* Links */}
        <div className="mt-24 grid grid-cols-1 gap-y-14 gap-x-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <button
              key={item}
              className="group relative w-fit text-left text-[22px] font-medium text-[#17124f]"
            >
              {/* Text */}
              <span className="transition-all text-lg duration-300  inline-block">
                {item}
              </span>

              {/* Animated Underline */}
              <span
                className="
                  absolute
                  left-0
                  bottom-1
                  h-[2px]
                  w-full
                  bg-[#17124f]
                  origin-left
                  scale-x-0
                  transition-transform
                  duration-300
                  ease-in-out
                  group-hover:scale-x-100
                "
              ></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}