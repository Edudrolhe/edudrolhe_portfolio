"use client";

// Your component code here

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Designer",
    id: "designer",
    content: (
      <ul className="list-disc pl-5">
        <li>Pacote ADOBE</li>
        <li>MAYA 3D</li>
        <li>ZBrush</li>
        <li>Toon Boom Harmony</li>
        <li>Unity HUB</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Developer",
    id: "developer",
    content: (
      <ul className="list-disc pl-5">
        <li>C++</li>
        <li>C#</li>
        <li>JAVA</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>Android Studio</li>
        <li>AstahUML</li>
        <li>StarUML</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("designer");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" aria-label="Sobre mim">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/Esse.png"
          width={500}
          height={500}
          alt="Description of the image"
        />
        <div>
          <h2 className="text-white font-bold text-4xl mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg mb-4">
            Designer e Desenvolvedor Multidisciplinar Formação em Design e
            Análise e Desenvolvimento de Sistemas, com MBA em Comunicação e
            Mídia. Atuando no time Objetivo/UNIP-SP. Design Grafic e animador
            2D/3D, Motion Design, Storyboards, Modelagem 3D e Stop Motion.
            Marketing Digital: Estratégias e desenvolvimento de conteúdo
            digital. Desenvolvimento: Protótipos web (React/UX/UI), APIs e
            sistemas desktop (Java, .NET/C#), com integração a bancos de dados.
            Gestão de Projetos: Aplicação de metodologias ágeis para soluções
            eficientes, adaptáveis e escaláveis.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("designer")}
              active={tab === "designer"}
            >
              Designer
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("developer")}
              active={tab === "developer"}
            >
              Developer
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
