import { useState, useEffect } from "react";

const HeroSection = () => {
  const initialSkills = ["Web Development", "App Development", "UI/UX Design"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedSkill, setDisplayedSkill] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let currentSkill = initialSkills[currentSkillIndex];
      let currentLength = displayedSkill.length;

      if (currentLength < currentSkill.length) {
        setDisplayedSkill(currentSkill.substring(0, currentLength + 1));
      } else {
        clearInterval(intervalId);

        setTimeout(() => {
          setDisplayedSkill("");
          setCurrentSkillIndex((prevIndex) =>
            prevIndex === initialSkills.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000); // Wait for 1 second before starting the next skill
      }
    }, 100); // Typing speed: 100 milliseconds per character

    return () => clearInterval(intervalId);
  }, [currentSkillIndex, displayedSkill, initialSkills]);

  return (
    <div className="bg-gray-100 text-slate-900 shadow-sm h-[75vh] mt-20 pt-20 gap-10 flex items-center justify-center flex-col md:flex-row ">
      {/* First Part: Rounded Images */}

      <div className="flex justify-center flex-1 ">
        {/* Replace these with your actual image URLs */}
        <img
          src="/images/avatar2.jpg"
          alt="Your Image 1"
          className="rounded-full w-64 h-64 md:w-80 md:h-80  mr-4 shadow-lg"
        />
      </div>

      {/* Second Part: Heading and Skills */}
      <div className="flex flex-col gap-2 flex-1 text-center md:text-left ">
        <h1 className=" text-3xl md:text-4xl font-bold mb-4">
          Welcome to Coding ERA{" "}
        </h1>
        <h2 className="text-4xl font-bold text-red-400">
          {" "}
          Hi, We are Here For{" "}
        </h2>

        <div className="flex items-center mt-4 gap-4">
          <p className=" text-4xl md:text-7xl text-red-500 font-extrabold  ">
            {displayedSkill}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
