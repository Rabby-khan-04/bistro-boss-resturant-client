import React from "react";

const SectionTitle = ({ heading, subHeading, color }) => {
  return (
    <div className="font-inter max-w-md mx-auto text-center mb-14">
      <p className="text-secondary text-xl italic mb-4">---{subHeading}---</p>
      <h2
        className={`text-neutral text-[40px] font-medium border-y-4 border-gray pt-5 pb-6 text-${
          color ? color : "neutral"
        } uppercase`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
