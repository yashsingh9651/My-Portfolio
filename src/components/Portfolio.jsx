import React, { useLayoutEffect, useRef } from "react";
import { FiSettings } from "react-icons/fi";
import { ImCss3, ImHtmlFive } from "react-icons/im";
import { SiJavascript, SiTailwindcss, SiRedux, SiGithub } from "react-icons/si";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const Portfolio = () => {
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const image = self.selector(".image");
      const text = self.selector(".text");
      if (window.innerWidth>=1000) {
          gsap.from(image, {
            x: -600,
            opacity: 0,
            scrollTrigger: {
              trigger: image,
              start: "bottom bottom",
              end: "top 10%",
              scrub: true,
            },
          });
          gsap.from(text, {
            x: 800,
            opacity: 0,
            scrollTrigger: {
              trigger: text,
              start: "bottom bottom",
              end: "top 10%",
              scrub: true,
            },
          });
      }
     else if (window.innerWidth<1000) {
          gsap.from(image, {
            x: -600,
            opacity: 0,
            scrollTrigger: {
              trigger: image,
              start: "bottom bottom",
              end: "top 25%",
              scrub: true,
            },
          });
          gsap.from(text, {
            x: 1200,
            opacity: 0,
            scrollTrigger: {
              trigger: text,
              start: "bottom bottom",
              end: "top 20%",
              scrub: true,
            },
          });
      }
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            src="parallax/planet1.png"
            className="w-36 animatePlanet1 object-cover absolute"
            alt=""
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            src="parallax/planet2.png"
            className="w-36 object-cover animatePlanet3 absolute"
            alt=""
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute animatePlanet1 top-40 object-cover rounded-lg"
            src="parallax/rock1.png"
            alt=""
          ></LazyLoadImage>
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute animatePlanet3 top-80 object-cover rounded-lg"
            src="parallax/rock2.png"
            alt=""
          ></LazyLoadImage>
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute animatePlanet2 object-cover rounded-lg"
            src="parallax/rock3.png"
            alt=""
          ></LazyLoadImage>
        </div>
      <LazyLoadImage
        src="parallax/stars1.jpg"
        className="w-screen h-screen object-cover z-30 absolute"
        alt=""
      />
      <div ref={main} className="p-3 z-50 relative text-cyan-600 h-screen">
        <div className="flex justify-start bg-[rgba(255,255,255,0.06)] backdrop-blur rounded p-1">
          <div className="image w-[200px] md:w-[300px]">
            <LazyLoadImage className="rounded" src="yash.jpg" />
          </div>
          <div className="px-2 text">
            <h1 className="md:text-2xl md:font-semibold mb-2">
              I am{" "}
              <span className="md:text-4xl md:font-bold text-purple-800">
                Yash Singh
              </span>
            </h1>
            <h1 className="text-[10px] md:text-2xl md:font-medium">
              Currently Living In Chitrakoot, Uttar Pradesh India. Having 5
              Months Of Experience In Frontend Development.
              <br />I Mostly Work With Java Script And Its Framework React Js.
              <br />I Have Great Experence In Building Great Product From
              Scratch.
            </h1>
          </div>
          {/* My Skills Section */}
        </div>
        <h1 className="flex items-center md:text-3xl md:font-medium gap-2 p-1 mt-10 md:p-2">
          <FiSettings />
          <div>My Skills</div>
        </h1>
        <div className="w-full grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-3 text-lg">
          {/* Language Section */}
          <div className="image bg-[rgba(255,255,255,0.06)] backdrop-blur rounded p-1 text-lg md:text-xl md:p-2  ">
            <h1 className="md:text-2xl md:font-medium">Languages :</h1>
            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
              <div className="flex items-center gap-1">
                <SiJavascript className="text-[#f0db4f] bg-[#323330]" />
                <h1 className="text-sm md:text-xl">Java Script</h1>
              </div>
              <div className="flex items-center gap-1">
                <ImHtmlFive className="text-[#e34c26]" />
                <h1 className="text-sm md:text-xl">HTML</h1>
              </div>
              <div className="flex items-center gap-1">
                <ImCss3 className="text-[#2965f1]" />
                <h1 className="text-sm md:text-xl">CSS</h1>
              </div>
            </div>
          </div>
          {/* Framework Section */}
          <div className="text bg-[rgba(255,255,255,0.06)] backdrop-blur rounded p-1 text-lg md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Frameworks :</h1>
            <div className="grid grid-cols-3 text-3xl md:text-4xl pt-2">
              <div className="flex items-center gap-1">
                <SiTailwindcss className="text-[#38bdf8]" />
                <h1 className="text-sm md:text-xl">Tailwind</h1>
              </div>
              <div className="flex items-center gap-1">
                <FaBootstrap className="text-[#7711f7]" />
                <h1 className="text-sm md:text-xl">Bootstrap</h1>
              </div>
              <div className="flex items-center gap-1">
                <TbBrandNextjs className="text-[#7711f7]" />
                <h1 className="text-sm md:text-xl">Next.js</h1>
              </div>
            </div>
          </div>
          {/* Libraries Section */}
          <div className="image bg-[rgba(255,255,255,0.06)] backdrop-blur rounded p-1 text-lg md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Libraries :</h1>
            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
              <div className="flex items-center gap-1">
                <RiReactjsLine className="text-[#61dafb]" />
                <h1 className="text-sm md:text-xl">React</h1>
              </div>
              <div className="flex items-center gap-1">
                <SiRedux className="text-[#764abc]" />
                <h1 className="text-sm md:text-xl">Redux</h1>
              </div>
            </div>
          </div>
          {/* Tools Section */}
          <div className="text bg-[rgba(255,255,255,0.06)] backdrop-blur rounded p-1 text-lg md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Tools :</h1>
            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
              <div className="flex items-center gap-1">
                <SiGithub className="text-[#000000]" />
                <h1 className="text-sm md:text-xl">Git Hub</h1>
              </div>
              <div className="flex items-center gap-1">
                <FaGitAlt className="text-[#f34f29]" />
                <h1 className="text-sm md:text-xl">Git</h1>
              </div>
            </div>
          </div>
          <div className="image bg-[rgba(255,255,255,0.06)] backdrop-blur rounded p-1 text-lg md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Storage :</h1>
            <div className="grid grid-cols-3 text-3xl md:text-4xl pt-2">
              <div className="flex items-center gap-1">
                <DiMongodb className="text-[#589636]" />
                <h1 className="text-sm md:text-xl">Mongo DB</h1>
              </div>
            </div>
          </div>
          {/* Platform Section */}
          <div className="text bg-[rgba(255,255,255,0.06)] backdrop-blur rounded p-1 text-lg md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Platform :</h1>
            <div className="grid grid-cols-3 text-2xl md:text-3xl pt-2">
              <div className="flex items-center gap-1">
                <IoLogoNodejs className="text-green-600" />
                <h1 className="text-sm md:text-xl">Node.js</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};