import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button.jsx';

const projects = [
  {
    year: "2025",
    title: "Forms Refresh",
    summary:
      "Updating our form builder to support multiple columns, improving structure and accessibility.",
    details: `
    Helped shape new multi-column layouts, contributed accessibility notes, and created quick design mockups to clarify architectural goals. Focused on translating complex requirements into a usable, accessible interface.
    `,
    tags: ["React", "Accessibility", "Cross-functional Communication", "UI Design"],
  },
  {
    year: "2024",
    title: "Task Page Redesign",
    summary:
      "Partnered with our designer to improve task discovery and usability for school staff.",
    details: `
    We reorganized the page to show school years and made tasks easier to locate. 
    I contributed user stories, implemented the React build, and handled most of the dev tickets. 
    The redesign received highly positive user feedback.
    `,
    tags: ["React", "Accessibility", "Design Collaboration"],
  },
  {
    year: "2024",
    title: "Design System Collaboration",
    summary:
      "Co-created a Figma component library to align Bootstrap and design tokens.",
    details: `
    Brought in Bootstrap knowledge to guide component structure and scalability. Helped design and build small reusable UI components to maintain design consistency across our product.
    `,
    tags: ["Design Systems", "Figma", "Bootstrap", "Component Architecture", "Collaboration"],
  },
  {
    year: "2020",
    title: "Static Site for Client (Contract)",
    summary:
      "Built a marketing site using React, Gatsby, and Storybook.",
    details: `
    Collaborated with another developer to deliver a fast static site. 
    Helped structure reusable components and implemented Storybook for visual QA.
    `,
    tags: ["React", "Gatsby", "Storybook", "Component-Driven Development"],
  },
];


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
      <div className={`mt-2 ${expandedProject === index ? 'block' : 'hidden'}`}>
        <p>{project.details}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
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