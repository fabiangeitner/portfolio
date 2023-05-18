import { Inter } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[90vh] bg-white p-9 sm:p-14 md:p-[100px] lg:pt-[100px] lg:pb-[200px] lg:px-[200px]">
        <div className="w-full h-full flex flex-col justify-center align-middle items-center md:items-start bg-[#5151CC] relative">
          <span className="text-[#8BE0FF] text-9xl font-black cursor-default">
            Fabian
          </span>
          <span className="text-[#8BE0FF] text-9xl font-black cursor-default">
            Geitner
          </span>
        </div>
        <div className="w-full md:w-auto flex flex-col md:absolute md:right-7 mt-5 md:mt-0 text-center md:text-left font-semibold">
          <span className="text-3xl cursor-default">/UX-Designer</span>
          <span className="text-3xl cursor-default">/Front-End Developer</span>
        </div>
        <div className="md:absolute bottom-9 left-9 my-5 md:my-0">
          <ul className="flex gap-5">
            <li className="text-[25px] md:text-[25px]">
              <Link
                href="https://www.linkedin.com/in/fabian-geitner-abaa48246/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li className="text-[25px] md:text-[25px]">
              <Link href="https://github.com/fabiangeitner" target="_blank">
                <FaGithub />
              </Link>
            </li>
            <li className="text-[25px] md:text-[25px]">
              <Link href="mailto:fabiangeitner17@gmail.de">
                <FaEnvelope />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:absolute md:bottom-9 font-semibold cursor-default">
          <span>Fabian Geitner Portfolio</span>
        </div>
      </div>
    </>
  );
};

export default Homepage;
