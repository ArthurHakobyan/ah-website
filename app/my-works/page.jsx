"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import myworks1 from "public/static/graphics/my-recent-works/Course Website Landing Page Thumbnail 1.png";
import myworks2 from "public/static/graphics/my-recent-works/Group 1.png";
import myworks3 from "public/static/graphics/my-recent-works/Group 2.png";

const MyWorksPage = () => {
  return (
    <div>
      <section className="bg-works-bg bg-repeat bg-center backdrop-opacity-[70] w-full py-20 flex-col mx-auto">
        <div className="md:mx-32 mx-auto pb-16 text-center">
          <h2 className="font-bold text-cream text-6xl">
            My Recent <span className="text-azure">Works</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:w-full justify-center items-stretch w-80 mx-auto">
          <div className="flex justify-center items-center bg-gray bg-opacity-70 p-8 my-4 rounded-xl">
            <Link
              href="/currently-working"
            >
              
              <Image
                src={myworks1}
                alt="vector image"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center bg-gray bg-opacity-70 p-8 my-4 rounded-xl">
            <Link href="/currently-working">
              <Image
                src={myworks2}
                alt="vector image"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center bg-gray bg-opacity-70 p-8 my-4 rounded-xl">
            <Link href="/currently-working">
              <Image
                src={myworks3}
                alt="vector image"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWorksPage;
