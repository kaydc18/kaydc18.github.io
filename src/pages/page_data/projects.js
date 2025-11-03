const projectsData = [
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

export default projectsData;