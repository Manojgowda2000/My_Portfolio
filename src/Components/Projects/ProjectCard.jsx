import React from 'react';
import { ExternalLink, GithubIcon } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveLink, 
  githubLink 
}) => {
  return (
    <div className="bg-[#1a1f38] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg max-w-xs mx-auto"> {/* Adjust max-width here */}
      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image || "/api/placeholder/400/200"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Section */}
      <div className="p-4 space-y-4"> {/* Adjust padding if necessary */}
        <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="text-gray-300 line-clamp-4">{description}</p> {/* Updated text color for better contrast */}
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 pt-0 flex justify-between items-center">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Code</span>
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
