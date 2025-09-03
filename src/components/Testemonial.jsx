import React, { useEffect } from 'react';
import ShineBorder from "@/components/magicui/shine-border";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

function Testemonial({ image, Description, post, name }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ShineBorder
      className="relative flex sm:h-[500px] h-auto m-auto w-[90%] flex-col mb-40 items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div
        className="flex flex-col sm:flex-row justify-center items-center p-4 gap-8 sm:gap-16"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="600"
      >
        {/* Image with fixed dimensions */}
        <div className="flex-shrink-0">
          <img
            className="w-[450px] h-[450px] object-cover rounded-md"
            src={image}
            alt="testimonial"
          />
        </div>

        {/* Text Content */}
        <div
          className="sm:mt-4 text-center sm:text-left"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-black to-blue-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10">
            By {post}
          </p>
          <div className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            {Description}
          </div>
          <div className="mt-6 text-right text-base sm:text-lg font-bold text-black dark:text-white">
            — {name}
          </div>
        </div>
      </div>
    </ShineBorder>
  );
}

export default Testemonial;
