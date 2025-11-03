import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button.jsx';

const projects = [
  {
    year: "2025",
    title: "Forms Refresh Initiative",
    summary: "Collaborated with designer and architect to modernize forms and add flexible layout options.",
    details: {
      overview: "I joined a cross-functional initiative to refresh our legacy Rails forms and migrate them to React. The goal was to create a more flexible and user-friendly form experience for administrators.",
      problem: "Our existing forms were rigid, slow, and inaccessible. They were built on outdated Rails views, limiting layout options and making it difficult to support multi-column or dynamic form elements.",
      approach: "Working closely with our designer and system architect, I researched form layout strategies, wireframed ideas, and translated architectural goals into early visual sketches. I also reviewed accessibility best practices for focus order, field labeling, and validation patterns.",
      solution: "We rebuilt the form system using React, adding a column-based layout for improved readability and responsiveness. I also documented accessibility requirements for developers and collaborated with design to ensure visual consistency across form types.",
      impact: "The new forms are faster, easier to navigate, and more flexible to maintain. The refresh improved developer efficiency and accessibility compliance, setting the foundation for future UI modernization.",
      images: [
        "/projects/forms_refresh/formsrefresh1.png",
        "/projects/forms_refresh/formsrefresh2.png",
        "/projects/forms_refresh/formsrefresh3.png"
      ]
    },
    tags: ["React", "Accessibility", "UI Modernization", "Collaboration", "Agile"]
  },
    {
      year: "2025",
      title: "Calendar Feature Launch",
      summary: "Built and launched a React Big Calendar–based scheduling tool to support K–12 nursing programs.",
      details: {
        overview: "Our team introduced a new calendar feature to help school nurses and administrators manage health events, deadlines, and screenings. I worked as a front-end developer and UX collaborator, ensuring the build was both performant and accessible.",
        problem: "Users had no built-in way to view or organize key health events. They relied on spreadsheets and manual tracking, which led to scheduling conflicts, missed deadlines, and difficulty coordinating across multiple schools.",
        approach: "Working closely with our designer and product manager, I evaluated third-party solutions and selected React Big Calendar as our foundation. I customized its layout, event styling, and filtering behavior to fit our users’ workflow. I also collaborated with design to refine color usage, date navigation, and accessibility patterns like keyboard navigation and focus management.",
        solution: "We launched a responsive React Big Calendar implementation with support for multiple event types, filtering, and custom tooltips. The feature seamlessly integrated with our existing data model and matched our product’s design language.",
        impact: "The calendar quickly became one of the most requested and used features by K–12 nursing customers. It improved visibility into scheduling, reduced manual coordination, and positioned our product as a stronger solution for health compliance tracking. The project also strengthened collaboration between design and engineering on complex interactive components.",
        images: [
          "/projects/calendar/calendar1.png",
          "/projects/calendar/calendar2.png",  
          "/projects/calendar/calendar3.png"
        ]
      },
      tags: ["React", "React Big Calendar", "Accessibility", "UX Collaboration", "Frontend Development"]
    },
    {
    year: "2025",
    title: "Design System Collaboration",
    summary: "Co-created a Figma component library to align Bootstrap and design tokens.",
    details: {
      overview: "Our design and engineering teams lacked a consistent visual language, leading to inconsistent UI and inefficient development. I collaborated closely with our designer to establish a shared design system foundation.",
      problem: "Developers were implementing UI components with different visual styles, spacing, and accessibility patterns. Without reusable design tokens or component documentation, every new feature required redesigning and rebuilding from scratch.",
      approach: "Our designer and I began building a Figma component library alongside Bootstrap. I contributed front-end structure guidance, helping map Figma components to code equivalents. We discussed naming conventions, design tokens, and accessibility standards to ensure long-term scalability.",
      solution: "We created a unified component set that matched both design and code, reducing handoff friction and improving design consistency. The new system introduced shared variables for colors, spacing, and typography, improving cross-team efficiency.",
      impact: "The design system became the foundation for all new UI development. Designers now work with ready-made components, and developers can quickly translate them into consistent, accessible code.",
      images: [
        "/projects/component_library/date_input.png",
        "/projects/component_library/radio_btn.png",
        "/projects/component_library/secondary-btn-component.png",
        "/projects/component_library/time_input.png"
      ]
    },
    tags: ["Design Systems", "Figma", "Bootstrap", "Component Architecture", "Collaboration"]
  },
  {
    year: "2024",
    title: "Task Page Redesign",
    summary: "Partnered with our designer to improve task discovery and usability for school staff.",
     details: {
      overview: 'I collaborated with our designer to improve a high-traffic task page that users found confusing and difficult to navigate. My role focused on development, user story creation, and providing UX input during design discussions.',
      problem: 'Our users—primarily school staff—struggled to locate student tasks due to an unorganized layout and inconsistent filtering options. Support tickets and user feedback highlighted frequent complaints about difficulty finding the right task for a given school year or student.',
      approach: 'Working in an agile sprint cycle, our designer led the visual redesign while I focused on structure and interaction. I contributed UX suggestions during design review sessions, particularly around grouping and filtering behavior, and ensured development would align with accessibility best practices. I also wrote user stories and handled most of the front-end implementation in React.',
      solution: 'We introduced a clear school-year grouping structure and redesigned filters to make task discovery more intuitive. The new layout displayed key information at a glance and made it easier to narrow results without losing context.',
      impact: 'The redesign received enthusiastic feedback from users and reduced confusion around locating student tasks. It’s now one of the most-used pages in the product and serves as a model for other team redesigns.',
      images: [ "/projects/task_page/taskpageredesign.png" ]
    },
    tags: ["React", "Accessibility", "Design Collaboration"],
  },

  {
    year: "2021",
    title: "Static Site for Client (Contract)",
    summary: "Built a marketing site using React, Gatsby, and Storybook.",
    details: {
      overview: "As part of a small contract team, I worked with another developer to deliver a fast, static marketing site for a client using modern front-end tools.",
      problem: "The client’s previous site was slow, difficult to update, and lacked reusable UI components. They wanted a performance-optimized, maintainable build that supported visual consistency across pages.",
      approach: "We chose Gatsby for its static generation and integrated Storybook for component-driven development. I helped plan the component structure, implement pages, and ensure the codebase was easy to maintain for future updates.",
      solution: "We built reusable UI components and styled them with consistent spacing and responsive layouts. Storybook allowed the client to preview and approve each component visually before integration.",
      impact: "The final site was lightweight, performant, and easy for the client to maintain. It demonstrated how a component-driven approach can streamline collaboration between developers and stakeholders.",
      images: [
        "/projects/static_site/student_projects/desktop_program.png",
        "/projects/static_site/student_projects/mobile-program.png", 
        "/projects/static_site/student_projects/desktop_sp.png",
        "/projects/static_site/student_projects/mobile_sp.png",
        "/projects/static_site/student_projects/desktop_sr.png",
        "/projects/static_site/student_projects/mobile_sr.png",
        "/projects/static_site/student_projects/tablet_sp.png"
      ]
    },
    tags: ["React", "Gatsby", "Storybook", "Component-Driven Development"]
  }
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