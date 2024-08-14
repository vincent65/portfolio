import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "OptionInsight (Work in progress)",
    description: "Interactive Options Profit and Loss Visualizer. Potential strategy performance is shown in the form of a graph of price of the underlying vs profit. Working on implementing an AI model or backtester that will output the likelihood of the strategy succeeding given the current market conditions and rules of probability.",
    imageUrl: "/images/ecommerce-project.jpg",
    githubLink: "",
    liveLink: "",
    technologies: ["Python", "Streamlit", "Pandas", "numpy", "sklearn", "scipy", "pytorch"]
  },
  {
    id: 2,
    title: "OrderBook in C",
    description: "Created a limit OrderBook capable of handling thousands of executions and transactions per second. The engine matches orders on price time priority, handling both market and limit orders for equities, making extensive use of STL containers and external libraries such as Chrono, mutex, and thread to allow safe multithreading and execution of orders",
    imageUrl: "/images/weather-app.jpg",
    githubLink: "https://github.com/vincent65/OrderBook-C-",
    liveLink: "",
    technologies: ["C++"]
  },
  {
    id: 2,
    title: "Full Stack Retrieval Augmented Generation(RAG) Application",
    description: "Scalable full-stack web application with a python backend, FastAPI endpoint hosted on AWS Lambda, and storage on DynamoDB. Responsive WebUI built with NextJS and Tailwind CSS. Used Amazon Titan V2 to create vector embeddings of a PDF to be stored inside of a chroma database. Received user requests and embedded them, attempting to find similarities in the chroma db. Passed the results into the Claude LLM via API to generate a coherent response based on the sources given.",
    imageUrl: "/images/weather-app.jpg",
    githubLink: "",
    liveLink: "",
    technologies: ["Python", "FastAPI", "NextJS", "Tailwind CSS", "AWS (Lambda, DynamoDB)"]
  },
  // Add more projects as needed
];

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`py-16 bg-gray-900 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-700 text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700 transition-colors duration-300"
                  >
                    {/* Live Demo */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;