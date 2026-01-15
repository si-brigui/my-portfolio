import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./skills.css";

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Adding new skills like Problem Solving, Algorithms, etc.
  const skills = [
    { name: "Web Development", percentage: 95 },
    { name: "Full-stack Development", percentage: 85 },
    { name: "Front-end Development", percentage: 90 },
    { name: "Back-end Development", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Scrum", percentage: 80 },
    { name: "SQL", percentage: 85 },
    { name: "PostgreSQL", percentage: 75 },
    { name: "Problem Solving", percentage: 90 },
    { name: "Algorithms", percentage: 85 },
    { name: "Data Structures", percentage: 88 },
    { name: "Version Control (Git)", percentage: 92 },
    { name: "Testing & Debugging", percentage: 80 },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="skills" className="skills">
      <div className="skills__heading">
        <h2>Skills</h2>
        <p>
          Proficient in front-end and back-end technologies, problem solving,
          algorithms, and more...
        </p>
      </div>

      <div className="skills__container">
        {/* Carousel container with arrows to the left and right */}
        <div className="carousel-container">
          {/* Left Arrow */}
          <button onClick={handlePrev} className="carousel-button">
            {"<"}
          </button>

          {/* Circular Progressbar */}
          <div className="skill">
            <CircularProgressbar
              value={skills[currentIndex].percentage}
              text={`${skills[currentIndex].percentage}%`}
              strokeWidth={8}
            />
            <span>{skills[currentIndex].name}</span>
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} className="carousel-button">
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
