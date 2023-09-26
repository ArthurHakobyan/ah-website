import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="py-28">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-1 text-cream text-md font-[400]">
          <Link
            href={"/"}
            className="md:px-4 px-2 flex items-center justify-center gap-2"
          >
            <Image
              src="/imgs/graphics/footer/home.png "
              alt="vector image"
              width={23}
              height={23}
            />{" "}
            Home
          </Link>
          <Link
            href={"/about-me"}
            className="md:px-4 px-2 flex items-center justify-center gap-2"
          >
            <Image
              src="/imgs/graphics/footer/phone.png "
              alt="vector image"
              width={23}
              height={23}
            />{" "}
            About Me
          </Link>
          <Link
            href={"/contact"}
            className="md:px-4 px-2 flex items-center justify-center gap-2"
          >
            <Image
              src="/imgs/graphics/footer/user.png "
              alt="vector image"
              width={23}
              height={23}
            />{" "}
            Contact
          </Link>
        </div>
        <div className="flex-1 flex gap-4 py-8">
          
          <Link target='_blank' href={"https://instagram.com/arthur__hakobyan?igshid=OGQ5ZDc2ODk2ZA=="}>
            <div className="bg-gray rounded-full p-3">
              <svg
                width={25}
                height={25}
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="#EEEEEE"
                    stroke-width="12"
                    d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                  ></path>
                  <circle
                    cx="96"
                    cy="96"
                    r="30"
                    stroke="#EEEEEE"
                    stroke-width="12"
                  ></circle>
                  <circle cx="135" cy="57" r="9" fill="#EEEEEE"></circle>
                </g>
              </svg>
            </div>
          </Link>
          
          <Link target='_blank' href={"https://www.linkedin.com/in/arthurthecreator/"}>
            <div className="bg-gray rounded-full p-3">
              <svg
                width={25}
                height={25}
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
                    d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                    stroke="#EEEEEE"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </Link>
        </div>
        <span className="text-cream text-sm">&copy; Copyright 2023 Artur Hakobyan</span>
      </div>
    </section>
  );
};

export default Footer;
