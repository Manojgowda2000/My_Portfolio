// src/components/experience/Experience.jsx
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { SectionTitle } from '../common/SectionTitle';
import { SiTensorflow, SiPython, SiMysql } from 'react-icons/si';
import { AiOutlineRobot } from 'react-icons/ai';



import droboLogo from '../../assets/images/byjus.png'; // Import the image
import pearlLogo from '../../assets/images/varcon.png'; // Import the image

const Experience = () => {
  const skills = [
    { Icon: AiOutlineRobot, color: "#E34F26" },
    { Icon: SiTensorflow, color: "#1572B6" },
    { Icon: SiPython, color: "#61DAFB" },
    { Icon: SiMysql, color: "#F24E1E" },
  ];

  const experiences = [
    {
      logo: droboLogo, // Use the imported image
      company: "Think and Learn Pvt. Ltd.",
      position: "Associate ML Engineer",
      duration: "June 2023 - December 2023",
      responsibilities: [
        " Developed and deployed machine learning models to enhance personalized learning experiences and optimize content delivery",
        " Conducted data preprocessing and feature engineering on large datasets to improve model performance and accuracy."
      ]
    },
    {
      logo: pearlLogo, // Use the imported image
      company: "Varcons Technology Pvt. Ltd.",
      position: "Full Stack Web Development Intern",
      duration: "Sept 2024 - Oct 2024",
      responsibilities: [
        " During the internship, they demonstrated good design skills and maintained a self-motivated attitude towards learning new things.",
        " I worked on a project involving the creation of a template for a gym using HTML,CSS,Java-script."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-[#171d32]">
      <SectionTitle>Experience</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 gap-10">
            {skills.map(({ Icon, color }, index) => (
              <div
                key={index}
                className="bg-[#1a1f38] p-4 rounded-xl flex items-center justify-center
                hover:transform hover:scale-105 transition-all duration-300"
              >
                <Icon size={40} color={color} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">Work History</h3>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
