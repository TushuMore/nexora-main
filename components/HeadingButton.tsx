import React from "react";

const HeadingButton = ({Heading=""}: {Heading: string}) => {
  return (
    <>
      {/* Intro Button */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Subtle line behind button */}
        <div className="absolute w-80 xl:w-200 lg:w-160 sm:w-100  h-px bg-linear-to-l from-transparent via-white to-transparent -z-10"></div>
        <button className="text-sm sm:text-xl text-white bg-gray-950 border border-white px-6 sm:px-10 py-2 rounded-full capitalize">
          {Heading}
        </button>
      </div>
    </>
  );
};

export default HeadingButton;
