import React from "react";

function TechStack() {
  const techStacks = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Express JS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Prisma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
  ];

  return (
    <>
      <style>
        {`
          .marquee {
            animation: scroll 20s linear infinite;
            width: max-content;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <section className="py-10 bg-white overflow-hidden">
        <div className="relative overflow-hidden">

          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

          <div className="marquee flex">
            {[...techStacks, ...techStacks].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mx-4 px-6 py-3 rounded-full border border-gray-200 bg-gray-50 shadow-sm whitespace-nowrap"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8"
                />

                <span className="font-semibold text-gray-800">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        </div>
      </section>
    </>
  );
}

export default TechStack;