import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-indigo-500 py-20">
      <h2 className="text-5xl sm:text-7xl mb-20 uppercase text-slate-200">
        Kontakt
      </h2>
      <div className="p-9">
        <p className="w-full lg:w-3/4 text-base text-white mb-20">
          Like what you see? Let’s create something that matters! Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore.
        </p>
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center mb-20 text-2xl font-semibold text-white hover:scale-125 transition-all duration-500 cursor-pointer">
            <Link href="mailto:fabiangeitner17@gmail.de">
              fabiangeitner@mail.de
            </Link>
          </div>
          <div className="flex justify-center items-center mb-10">
            <ul className="flex gap-5">
              <li className="text-[25px] md:text-[25px] text-white hover:scale-125 transition-all duration-500 cursor-pointer">
                <Link
                  href="https://www.linkedin.com/in/fabian-geitner-abaa48246/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li className="text-[25px] md:text-[25px] text-white hover:scale-125 transition-all duration-500 cursor-pointer">
                <Link href="https://github.com/fabiangeitner" target="_blank">
                  <FaGithub />
                </Link>
              </li>
              <li className="text-[25px] md:text-[25px] text-white hover:scale-125 transition-all duration-500 cursor-pointer">
                <Link href="mailto:fabiangeitner17@gmail.de">
                  <FaEnvelope />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center ">
            <ul className="flex justify-center items-center gap-5">
              <li className="text-white underline underline-offset-4 hover:scale-105 transition-all duration-500 cursor-pointer">
                <Link href="/">Impressum</Link>
              </li>
              <li className="text-white underline underline-offset-4 hover:scale-105 transition-all duration-500 cursor-pointer">
                <Link href="/">Datenschutz</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
