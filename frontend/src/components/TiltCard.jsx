function TiltCard({ image, title, description }) {
  return (
    <div className="group cursor-pointer">
      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-3">
        {/* Image */}
        <div className="rounded-[30px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Card */}
        <div className="relative -mt-10 mx-5 rounded-[24px] bg-white p-6 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
          <h3 className="text-3xl font-semibold text-[#1B0A42]">
            {title}
          </h3>

          <p className="mt-4 text-lg leading-8 text-[#0E0A42]">
            {description}
          </p>

          <button className="group/btn relative mt-6 inline-block text-lg font-medium text-[#1B0A42]">
            <span>Learn More</span>

            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-current origin-left scale-x-0 transition-transform duration-300 group-hover/btn:scale-x-100" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TiltCard;