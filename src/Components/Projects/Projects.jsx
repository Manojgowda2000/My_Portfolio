// src/components/projects/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { SectionTitle } from '../common/SectionTitle';
import ecommerceImg from '../../assets/images/project1.png'; 
import virtualAssistantImg from '../../assets/images/next_word_predictor.png';
import mailSenderImg from '../../assets/images/catvsdog.jpg';
import ruleEngineWithAST from '../../assets/images/helmetdetection.png';
import realTimeWeatherApplication from '../../assets/images/pcbdefectdetection.png';

const Projects = () => {
  const projects = [
    {
      title: "T20 cricket score prediction using XG-Boost.",
      description: "Developed an ML model to predict T20 cricket scores, utilizing advanced algorithms like Random Forest and XGBoost and Deployed the model on Render, providing a live, interactive platform for real-time score predictions.",
      image: ecommerceImg, 
      technologies: [  "Machine Learning", "Python","Flask"],
      githubLink: "https://github.com/Manojgowda2000/t20_cricket_score_predictor",
      liveLink : "https://t20-cricket-score-predictor-0jct.onrender.com/"
    },
    {
      title: "Next Word Predictor using LSTM.",
      description: "Developed a Next Word Predictor leveraging a deep learning model based on LSTM (Long Short-Term Memory)networks. Trained the model on textual FAQs data using Keras Tokenizer to preprocess input and handle word embeddings.",
      image: virtualAssistantImg, 
      technologies: [  "Python", "Deep Learning", "Streamlit","LSTM"],
      githubLink: "https://github.com/Manojgowda2000/"
    },
    {
      title: "Cat vs Dog classification using CNN",
      description: " Developed a deep learning model using Convolutional Neural Networks (CNN) to classify images as cats or dogs with high accuracy.",
      image: mailSenderImg, 
      technologies: [  "Python", "Deep Learning","CNN"],
      githubLink: "https://github.com/Manojgowda2000/"
    },
    {
      title: "Helmet and Number Plate Detection using YOLO model",
      description: "Develop a system that detects helmets and recognizes vehicle number plates using Deep learning.",
      image: ruleEngineWithAST, 
      technologies: [  "Object detection", "Deep Learning", "Streamlit"],
      githubLink: "https://github.com/Manojgowda2000/"
    },
    {
      title: "PCB Defect Detection using YOLO model",
      description: "Develop a system that detects defected PCB parts using Deep learning.",
      image: realTimeWeatherApplication, 
      technologies: [  "Object detection", "Deep Learning", "Streamlit"],
      githubLink: "https://github.com/Manojgowda2000/"
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
