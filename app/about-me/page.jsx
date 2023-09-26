"use client";
import React from "react";
import Image from "next/image";
import heroimage from '/static/graphics/about-me-vectors/Group 2351.png'

const AboutPage = () => {
  return (
    <section>
      <div className="md:flex md:gap-4 container mx-auto px-8 py-32 ">
        <div className="flex-1 text-cream pt-16 pb-16 relative">
          <div className="absolute top-0 left-0">
            <Image
              src="/static/graphics/about-me-vectors/Vector 141.png "
              alt="vector image"
              width={63}
              height={48}
            />
          </div>
          <div className="absolute top-5 left-80">
            <Image
              src="/static/graphics/about-me-vectors/lightbulb.png "
              alt="vector image"
              width={75}
              height={90}
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/static/graphics/about-me-vectors/Vector 186.png "
              alt="vector image"
              width={130}
              height={130}
            />
          </div>
          <h2 className="font-bold text-4xl">
            About <span className="text-azure">me</span>
          </h2>
          <p className="md:w-auto w-80 py-6">
            I'm an experienced front-end developer with expertise in React.js. I
            specialize in crafting visually appealing and high-performance
            e-commerce and static websites. My skills ensure your projects not
            only look great but also deliver an exceptional user experience.{" "}
          </p>
          <p className="md:w-auto w-80">
            Through our close collaboration, we can transform your website or
            web application into a success. Your vision and goals drive the
            process, and together, we'll create something exceptional that
            exceeds your expectations. Your success is my priority, and I'm
            committed to working closely with you every step of the way to bring
            your digital dreams to life.{" "}
          </p>
        </div>
        <div className="flex justify-center flex-1 md:shrink-0">
          <Image
            src={heroimage}
            alt="vector image"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
