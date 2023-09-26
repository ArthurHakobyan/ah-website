"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "../components/button/Button";
import { BUTTON_TYPES } from "../data/button";
import emailjs from "@emailjs/browser";
import contactimage from "public/static/graphics/contact-vectors/Group 2373.png";

const ContactPage = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s6c2c5r",
        "template_y2jkr6k",
        form.current,
        "AKoOKTmmVSHpPyE7u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 7000);
  };

  return (
    <section className="md:flex md:gap-4 container mx-auto px-8 py-32">
      <div className="flex-1 flex flex-col justify-center">
        <div>
          <h2 className="font-bold text-cream text-6xl w-4/5">
            Got a Project In <span className="text-azure">Mind?</span>
          </h2>
        </div>
        <div>
          <Image
            src={contactimage}
            alt="vector image"
            width={450}
            height={450}
          />
        </div>
      </div>
      <div className="flex-1">
        <form className="w-full max-w-lg" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-cream text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray text-gray-700 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="user_name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-cream text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray text-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="user_lastname"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-cream text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray text-gray-700 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="user_email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-cream text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray text-gray-700 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div>
              <Button
                type={BUTTON_TYPES.PRIMARY}
                btnText="Message"
                icon={
                  <svg
                    width={25}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z"
                        stroke="#EEEEEE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                }
              />
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
        {isMessageSent && (
          <div className="text-azure font-[700] py-6">
            Message Sent Successfully!<br></br> Thank you for contacting me; this means a
            lot to me.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
