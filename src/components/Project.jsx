import React, { useRef,useLayoutEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Images from "../parallax";
import ProjectData from '../data';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const Project = () => {
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const image = self.selector(".image");
      const text = self.selector(".text");
      if (window.innerWidth >= 1000) {
        gsap.from(image, {
          x: -600,
          opacity: 0,
          scrollTrigger: {
            trigger: image,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        });
        gsap.from(text, {
          x: 800,
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
      <section className="w-screen overflow-hidden h-screen absolute z-40">
        <div className="absolute overflow-hidden z-40 w-screen h-screen">
          <LazyLoadImage
            src={Images.planet1}
            className="w-36 animatePlanet1 object-cover absolute"
            alt=""
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            src={Images.planet2}
            className="w-36 object-cover animatePlanet3 absolute"
            alt=""
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute animatePlanet1 top-40 object-cover rounded-lg"
            src={Images.rock1}
            alt=""
          ></LazyLoadImage>
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute animatePlanet3 top-80 object-cover rounded-lg"
            src={Images.rock2}
            alt=""
          ></LazyLoadImage>
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <LazyLoadImage
            className="w-20 absolute animatePlanet2 object-cover rounded-lg"
            src={Images.rock3}
            alt=""
          ></LazyLoadImage>
        </div>
        <LazyLoadImage
          src={Images.stars}
          className="w-screen h-screen object-cover z-30 absolute"
          alt=""
        />
      </section>
      {/* Heading */}
        <section ref={main} className="w-screen min-h-screen bg-[url('stars.jpg')] relative z-50">
          <h1 className="text-center text text-5xl pt-10 text-white">Featured Work</h1>
                {/* Photos Section */}
          <div className="lg:px-24 lg:py-10 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full overflow-hidden lg:gap-5 gap-2">
            {ProjectData.map((item)=><a href={item.url} key={item.id} className="hover:scale-105 duration-150 image">
              <img
                src={item.image}
                className="w-full h-[260px] object-cover rounded"
                alt=""
              />
            </a>)}
          </div>
        </section>
    </>
  );
};
