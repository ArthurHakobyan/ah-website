"use client";

import React from "react";
import Image from "next/image";
import Button from "./components/button/Button";
import AboutPage from "./about-me/page";
import MyWorksPage from "./my-works/page";
import ContactPage from "./contact/page";
import { BUTTON_TYPES } from "./data/button";
import { saveAs } from "file-saver";
import Link from "next/link";

const HomePage = () => {
  const handleDownloadCv = () => {
    const cvUrl = "/download-files/Artur-Hakobyan-CV.pdf";

    saveAs(cvUrl, "Artur-Hakobyan-CV.pdf");
  };

  return (
    <>
      <section className="md:flex container mx-auto px-8 py-32">
        <div className="flex flex-1 align-center justify-center">
          <div className="my-auto relative md:pl-16">
            <div className="absolute bottom-0 left-0 ">
              <Image
                src="/images/graphics/home-vectors/Vector 187.png"
                alt="vector image"
                width={60}
                height={50}
              />
            </div>
            <h1 className="pb-8 text-cream font-[700] md:text-7xl  text-4xl">
              CREATIVE FRONT END <span className="text-azure">DEVELOPER</span>
            </h1>
            <div className="flex">
              <Link href="/contact">
                <Button type={BUTTON_TYPES.PRIMARY} btnText="Hire Me" />
              </Link>
              <Button
                onClick={handleDownloadCv}
                type={BUTTON_TYPES.SECONDARY}
                btnText="Download CV"
                icon={
                  <svg
                    width={25}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                        fill="#EEEEEE"
                      ></path>{" "}
                      <path
                        d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                        fill="#EEEEEE"
                      ></path>{" "}
                    </g>
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        <div className="flex md:shrink-0 flex-1 align-center justify-center ">
          <Image
            src="/images/graphics/home-vectors/Group 2347.png "
            alt="vector image"
            width={450}
            height={450}
          />
        </div>
      </section>
      <AboutPage />
      <MyWorksPage />
      <ContactPage />
    </>
  );
};

export default HomePage;
