"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/icons8-instagram.svg";
import YoutubeIcon from "../../../public/icons8-youtube.svg";
import TwitterIcon from "../../../public/twitter-svgrepo-com.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/jason",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, option);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Vamos nos conectar?
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Podemos aprender um com o outro, crescer juntos e quem sabe criar algo
          incrível! Me chame para trocar ideias. Estou aqui!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/Edudrolhe"}>
            <Image
              src={GithubIcon}
              alt="Gitub Icon"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          <Link href={"https://www.linkedin.com/feed/"}>
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          <Link href={"https://www.instagram.com/edudrolhee/"}>
            <Image
              src={InstagramIcon}
              alt="Instagram Icon"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          <Link href={"https://www.youtube.com/@eduardodrolhe6212"}>
            <Image
              src={YoutubeIcon}
              alt="Youtube Icon"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          <Link href={"https://x.com/ilovesacanag"}>
            <Image
              src={TwitterIcon}
              alt="Twitter Icon"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="edudrolhe@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Assunto
            </label>
            <input
              name="subject"
              type="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Me envie um oi"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="messege"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Vamos conversar sobre...."
            />
          </div>
          <button
            type="submit"
            className="bg-red-700 hover:bg-blue-400 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Envie Mensagem
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email enviado com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
