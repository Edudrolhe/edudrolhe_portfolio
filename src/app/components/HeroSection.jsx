"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-blue-500 to-purple-600">
              {"Hello, I&apos;m "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Eduardo",
                2000,
                "Designer",
                2000,
                "Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Vivendo e respirando em um mundo digital e visual, meu lema como
            designer e programador é embelezar a realidade. Acredito que o
            design e o desenvolvimento têm o poder de ir além da estética e da
            funcionalidade: eles podem revelar a profundidade de cada história,
            de cada lugar, de cada pessoa, de cada dor, de cada indivíduo.
            Através deles, é possível criar redes de apoio, fortalecer
            comunidades e, acima de tudo, gerar felicidade e conexões
            significativas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-0 sm:mr-4 bg-gradient-to-br from-red-500 via-blue-500 to-purple-600 hover:bg-slate-200 text-white transition-all duration-300">
              Sobre mim
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-purple-600 hover:bg-slate-800 text-white mt-0 sm:mt-3 transition-all duration-300">
              <a 
                href="https://wa.me/5511971604273?text=Ol%C3%A1%20Mundo!%0A%0ASeu%20neg%C3%B3cio%20merece%20um%20design%20impactante%20e%20um%20software%20que%20funcione%20perfeitamente%20-%0Ae%20%C3%A9%20exatamente%20isso%20que%20entregamos!" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-all duration-300"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/Me.png"
              alt="Imagem de perfil de Eduardo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover w-full h-full"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;