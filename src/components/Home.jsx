import React, { useLayoutEffect, useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Typed from "react-typed";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const Home = () => {
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const image = self.selector(".image");
      const planet1 = self.selector(".planet1");
      const planet2 = self.selector(".planet2");
      const gif = self.selector(".gif");
      const rock = self.selector(".rock");
      const rock2 = self.selector(".rock2");
      const rock3 = self.selector(".rock3");
      const text = self.selector(".text");
      gsap.to(image, {
        y: 300,
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to(planet1, {
        y: 340,
        x: -220,
        scrollTrigger: {
          trigger: planet1,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to(planet2, {
        y: 120,
        x: 100,
        scrollTrigger: {
          trigger: planet2,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
      if (window.innerWidth >= 900) {
        gsap.to(gif, {
          x: 700,
          opacity: 0.2,
          scrollTrigger: {
            trigger: gif,
            start: "top top",
            end: "bottom 20%",
            scrub: true,
          },
        });
      }
      gsap.to(text, {
        x: -700,
        opacity: 0.2,
        scrollTrigger: {
          trigger: text,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to(rock, {
        y: -260,
        x: -200,
        scrollTrigger: {
          trigger: rock,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to(rock2, {
        y: 350,
        x: 80,
        scrollTrigger: {
          trigger: rock2,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to(rock3, {
        y: -260,
        x: 60,
        scrollTrigger: {
          trigger: rock3,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section ref={main} className="relative bg-slate-900 h-screen">
        <LazyLoadImage
          src="parallax/front.png"
          className="w-screen h-screen object-cover z-40 absolute"
          alt=""
        />
        <LazyLoadImage
          src="parallax/back.png"
          className="w-screen h-screen image object-cover z-30 absolute"
          alt=""
        />
        <LazyLoadImage
          src="parallax/stars1.jpg"
          className="w-screen h-screen object-cover z-10 absolute"
          alt=""
        />
        <div className="planet1 absolute z-20 w-screen h-screen">
          <LazyLoadImage
            src="parallax/planet1.png"
            className="w-36 top-28 right-52 object-cover absolute"
            alt=""
          />
        </div>
        <div className="planet2 absolute z-20 w-screen h-screen">
          <LazyLoadImage
            src="parallax/planet2.png"
            className="w-36 object-cover absolute left-56 top-60"
            alt=""
          />
        </div>
        <div className="gif absolute z-50 lg:p-28 p-2 pb-14 lg:pb-28 w-screen h-screen flex md:justify-center lg:justify-end lg:items-center items-end">
          <LazyLoadImage
            className="lg:h-80 object-cover rounded-lg"
            src="parallax/intro.gif"
            alt=""
          ></LazyLoadImage>
        </div>
        <div className="rock absolute z-20 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute bottom-16 right-80 object-cover rounded-lg"
            src="parallax/rock1.png"
            alt=""
          ></LazyLoadImage>
        </div>
        <div className="rock2 absolute z-20 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute top-16 left-80 object-cover rounded-lg"
            src="parallax/rock2.png"
            alt=""
          ></LazyLoadImage>
        </div>
        <div className="rock3 absolute z-20 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute top-[45%] left-[40%] object-cover rounded-lg"
            src="parallax/rock3.png"
            alt=""
          ></LazyLoadImage>
        </div>
        {/* Text and Social Media */}
        <div className="text absolute z-50 lg:p-32 p-2 pt-20 lg:pt-32 text-center lg:text-start w-screen h-screen">
          {/* Text */}
          <h1 className="md:text-4xl font-black text-white pt-3 lg:pt-0 uppercase">
            I am{" "}
            <Typed
              strings={["Yash Singh", "a Web Developer"]}
              loop
              className="text-purple-600"
              typeSpeed={100}
              backSpeed={100}
            />
          </h1>
          <h1 className="capitalize md:w-3/6 md:mx-auto lg:mx-0 w-full text-white rounded p-3 backdrop-blur-sm lg:my-14 my-2 lg:font-medium text-center md:text-lg text-xs bg-[#c2c2c24a]">
            Front-End Developer Who Writes Clean, Elegant and Efficient Code.{" "}
            <br />
            <br /> I'm probably the most passionate web developer you will ever
            get to work with.If you have a great project that needs some amazing
            skills, I'm your guy.I can create amazing responsive website
          </h1>
          {/* Social Media */}
          <div className="flex gap-3 md:text-3xl text-white  md:w-3/6 md:mx-auto lg:mx-0">
            <a
              target={"_blank"}
              href="https://api.whatsapp.com/qr/EZPIX56PGTK6B1?autoload=1&app_absent=0"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              target={"_blank"}
              href="https://github.com/yashsingh9651"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur"
            >
              <BsGithub />
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/yash-singh-a191b0262/"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur"
            >
              <ImLinkedin />
            </a>
            <a
              target={"_blank"}
              href="https://twitter.com/yash_singh9"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur"
            >
              <AiOutlineTwitter />
            </a>
            <a
              target={"_blank"}
              href="https://www.instagram.com/yash27_singh/"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
