import React from "react";
import HeroSection from "../components/HeroSection";
import aboutData from "./page_data/about";

export default function About() {
  const sections = aboutData;

  return (
    <div className="mx-auto my-auto max-w-5xl flex flex-col items-start justify-center gap-14 md:p-4 p-1.5">
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
