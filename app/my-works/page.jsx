import React from "react";
import Image from "next/image";

const MyWorksPage = () => {
  return (
    <div className="md:relative ">
      <div className="hidden md:block bg-my-works-bg brightness-75 w-full py-80"></div>
      <section className="md:absolute top-0 left-0 w-full py-28 flex flex-col container mx-auto">
        <div className="md:mx-32 mx-auto pb-16 text-center">
          <h2 className="font-bold text-cream text-6xl">
            My Recent <span className="text-azure">Works</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
          <div className="bg-gray bg-opacity-70 p-8 inline-block rounded-xl">
            <Image
              src="/images/graphics/my-recent-works/Course Website Landing Page Thumbnail 1.png "
              alt="vector image"
              width={200}
              height={100}
            />
          </div>
          <div className="bg-gray bg-opacity-70 p-8 inline-block rounded-xl">
            <Image
              src="/images/graphics/my-recent-works/Group 1.png "
              alt="vector image"
              width={200}
              height={100}
            />
          </div>
          <div className="bg-gray bg-opacity-70 p-8 inline-block rounded-xl">
            <Image
              src="/images/graphics/my-recent-works/Group 2.png "
              alt="vector image"
              width={200}
              height={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWorksPage;
