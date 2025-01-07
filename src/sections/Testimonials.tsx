"use client";
import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.png";
import image2 from "@/assets/images/testimonial-2.png";
import image3 from "@/assets/images/testimonial-3.png";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Naseem Khan",
    company: "Simplex Fire Corp.",
    role: "Salesman",
    quote:
      "Freelevance's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.3,
  },
  {
    name: "Malik Faiq",
    company: "Engine Tech",
    role: "Technical Lead",
    quote:
      "Freelevance provided engine tech & automated solutions plus cloud infrastructure management, successfully got delivered.",
    image: image2,
    imagePositionY: 0.3,
  },
  {
    name: "Jaun Raza",
    company: "JR Studios",
    role: "Founder & Owner",
    quote:
      "The collaborative process was amazing. Freelevance brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.3,
  },
];

const Testimonials: FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    });
  };

  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if (curr === testimonials.length - 1) return 0;
      return curr + 1;
    });
  };

  return (
    <section className="section" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformBottom,
          }}
        >
          Some nice words from our past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{
            x: transformTop,
          }}
        >
          Some nice words from our past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                    key={name}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-[#131313] hover:border-red-orange-500  transition-all duration-300"
            onClick={handleClickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-[#131313] hover:border-red-orange-500 transition-all duration-300"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
