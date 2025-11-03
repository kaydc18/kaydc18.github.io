import React from 'react';
import HeroSection from '../components/HeroSection';

export default function About() {
  const sections = [
  { id: 'hero', 
    title: 'Hi! I\'m Kaylyn.',
    subtitle: 'Design Engineer & Accessibility Advocate',
    description: "I blend front-end engineering and design thinking to craft accessible, cohesive user experiences. I love turning beautiful concepts into functional, inclusive interfaces and building systems that help teams move faster together.",
    button: {
      text: 'See Projects',
      link: '/projects',
      variant: 'primary',
    }
  },
  { id: 'skills',
    subtitle: 'Skills and Interests',
    description: 'React • HTML • CSS • Tailwind • Figma • Design Systems • Accessibility (CPACC) • Inclusive Design',
  }
];

  return (
    <div className="mx-auto my-auto max-w-5xl flex flex-col items-start justify-center gap-14 md:p-4 p-1">
      {sections.map((section, index) => {
        let keyCreate = section.id + index;
        return (
          <>
            <HeroSection
              key={keyCreate}
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
              button={section.button}
            />
          {index < sections.length - 1 && (
            <hr className="border-2 border-salmon-900 w-10 rounded-full self-center" />
          )}
        </>
      );
    })}
    </div>
  );
}