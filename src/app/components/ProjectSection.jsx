"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Portfolio Website feito com React.js",
    image: "/images/projects/1.png",
    tag: ["All", "Developer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 2,
    title: "Portfolio Website Photografia",
    description: "Portfolio Website feito com React.js",
    image: "/images/projects/2.png",
    tag: ["All", "Developer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 3,
    title: "E-Commerce Website",
    description: "Portfolio Website feito com React.js",
    image: "/images/projects/3.png",
    tag: ["All", "Developer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "Pizzaria Website",
    description: "Portfolio Website feito com React.js",
    image: "/images/projects/4.png",
    tag: ["All", "Developer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "Sistema Desktop",
    description: "Sistema para Desktop feito com C#",
    image: "/images/projects/5.png",
    tag: ["All", "Developer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "App Android",
    description: "APP para sistema Android feito com Java Andoid Studio",
    image: "/images/projects/6.png",
    tag: ["All", "Developer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 7,
    title: " Projeto Grafic Designer",
    description: "Feito com MAYA 3D",
    image: "/images/projects/01cubo.png",
    tag: ["All", "Designer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 8,
    title: "Grafic Designer",
    description: "Feito com MAYA 3D",
    image: "/images/projects/02DellValle.png",
    tag: ["All", "Designer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 9,
    title: "Grafic Designer",
    description: "Feito com MAYA 3D",
    image: "/images/projects/03cenario.png",
    tag: ["All", "Designer"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 10,
    title: "Grafic Designer",
    description: "Feito com MAYA 3D",
    image: "/images/projects/04yoda.png",
    tag: ["All", "Designer"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <section id="projetos">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Designer"
          isSelected={tag === "Designer"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Developer"
          isSelected={tag === "Developer"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
