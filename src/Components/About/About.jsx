// src/components/about/About.jsx
import { SectionTitle } from '../common/SectionTitle';
import { IoArrowForward } from "react-icons/io5";
import portfolio2nd from '../../assets/images/portfolio2nd.jpeg';

const AboutCard = ({ title, description }) => (
  <div className="flex gap-4 p-4 hover:bg-[#1a1f38] rounded-xl transition-all duration-300">
    <IoArrowForward size={24} className="text-[#465697] mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const About = () => {
  const skills = [
    {
      title: "ML Engineer",
      description: "I am proficient in Python and machine learning frameworks such as TensorFlow and PyTorch, enabling me to develop and deploy efficient and scalable machine learning models. My experience with model development and optimization ensures seamless integration and high performance across various applications."
    },
    {
      title: "Data Scientist",
      description: "I am proficient in Python, R, and SQL, enabling me to analyze and interpret complex datasets effectively. My experience with machine learning models and data visualization tools allows for accurate predictions and insightful data-driven decision-making, ensuring a seamless and impactful analytical process."
    },
    {
      title: "Data Analyst",
      description: "I am proficient in data analysis and visualization using tools like Python, SQL, and Power BI, enabling me to derive actionable insights from complex datasets. My experience with data-driven decision-making ensures accurate analysis and reporting for business growth and efficiency."
    }
  ];

  return (
    <section id="about" className="section-padding bg-[#1a1f38]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src={portfolio2nd}
              alt="About me"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171d32] to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <AboutCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;