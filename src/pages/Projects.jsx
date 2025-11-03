import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button.jsx';
import projectsData from './page_data/projects';

const projects = projectsData;


const renderProjects = (projects, expandedProject, toggleProject) => {
  return projects.map((project, index) => (
    <li key={index} className="mb-10 ms-4 flex flex-col gap-1 justify-start">
      <div className="absolute w-3 h-3 bg-salmon-500 rounded-full  -start-1.5 border border-salmon-100"></div>
      <time className="mb-1 mt-0.25 text-sm text-sans">{project.year}</time>
      <h2 className="text-3xl font-family-serif text-fuchsia-900">{project.title}</h2>
      <p className="text-lg">{project.summary}</p>
      <div>
        <Button onClick={() => toggleProject(index)} buttonIcon={expandedProject === index ? faChevronUp : faChevronDown} buttonText="More details" iconLocation="right" />
      </div>
      <div className={`mt-2 flex flex-col justify-start gap-2 ${expandedProject === index ? 'block' : 'hidden'}`}>
        <h3 className="text-xl font-family-serif mb-1">Overview</h3>
        <p>{project.details.overview}</p>
        <h3 className="text-xl font-family-serif mb-1">Problem</h3>
        <p>{project.details.problem}</p>
        <h3 className="text-xl font-family-serif mb-1">Approach</h3>
        <p>{project.details.approach}</p>
        <h3 className="text-xl font-family-serif mb-1">Solution</h3>
        <p>{project.details.solution}</p>
        <h3 className="text-xl font-family-serif mb-1">Impact</h3>
        <p>{project.details.impact}</p>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.details.images && project.details.images.map((image, imageIndex) => (
            <div key={imageIndex}>
              <figure className="group cursor-pointer">
                <a href={`#lightbox-${index}-${imageIndex}`} className="block relative overflow-hidden rounded-lg border-2 border-transparent hover:border-fuchsia-500 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={`${image}`} 
                      alt={`Project screenshot ${imageIndex + 1} thumbnail`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-fuchsia-900/0 group-hover:bg-fuchsia-900/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-family-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-fuchsia-800/80 px-3 py-1 rounded">
                        View Full Size
                      </span>
                    </div>
                  </div>
                  <figcaption className="text-sm text-center mt-2 group-hover:text-fuchsia-700 transition-colors duration-300">
                    {project.title} Figure {imageIndex + 1}
                  </figcaption>
                </a>
              </figure>
              <div id={`lightbox-${index}-${imageIndex}`} className="hidden target:block fixed inset-0 bg-black/75 z-50 p-8">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative max-w-full max-h-full">
                    <a href="#" className="bg-white hover:bg-gray-100 px-3 py-1 text-black absolute -right-10 -top-5 rounded z-10 transition-colors duration-200">✕</a>
                    <img src={image} alt={`Project screenshot ${imageIndex + 1}`} className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-start gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="bg-salmon-200 text-salmon-900 px-2 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>
    </li>
  ));
};

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="mx-auto my-auto max-w-5xl flex flex-col items-start justify-center gap-14 md:p-4 p-1">
      <h1 className="text-5xl font-family-serif text-gray-900">Projects Page</h1>

      <ol className="relative border-l-2 border-salmon-900">
        {renderProjects(projects, expandedProject, toggleProject)}
      </ol>

    </section>
  );
} 