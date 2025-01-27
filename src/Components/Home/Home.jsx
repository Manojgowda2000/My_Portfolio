// src/components/home/Home.jsx
import { useTypewriter } from '../../hooks/useTypewriter';
import { Button } from '../common/Button';
import profileImage from '../../assets/images/my.jpg'; // Import the image

const Home = () => {
  const typedText = useTypewriter([
    "Hi, I'm Manoj R",
    "I'm a ML Engineer"
  ]);

  return (
    <section className="min-h-screen pt-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gray-900">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {typedText}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hello! I'm a ML Engineer from Bengaluru, Karnataka. With expertise in Python, MySQL, Power BI, Machine learning and Deep learning.
        </p>
        <Button onClick={() => document.getElementById('about').scrollIntoView()} aria-label="Explore My Work">
          Explore My Work
        </Button>
      </div>
      <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={profileImage}
          alt="Profile of Manoj R, a ML Engineer"
          className="w-80 h-80 rounded-full object-cover shadow-xl"
        />
      </div>
    </section>
  );
};

export default Home;
