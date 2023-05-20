import React from "react";

const Expertise = () => {
  return (
    <div className="w-full md:min-h-[90vh] md:flex bg-[#F7F7F7]">
      <div className="md:w-1/2 py-20">
        <h2 className="text-5xl sm:text-7xl mb-20 uppercase text-slate-500 opacity-25">
          Expertise
        </h2>
        {/* FRONTEND */}
        <div className="w-full p-9">
          <h3 className="text-xl pb-5">01 Frontend Development</h3>
          <p className="pb-5">
            Like what you see? Let’s create something that matters! Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore.
          </p>
          <div className="w-full flex flex-col md:flex-row pl-5">
            <ul className="w-1/2">
              <li className="list-disc">HTML</li>
              <li className="list-disc">CSS / SASS</li>
              <li className="list-disc">Javascript</li>
              <li className="list-disc">React</li>
              <li className="list-disc">Next Js</li>
            </ul>
            <ul className="w-1/2">
              <li className="list-disc">Foundation</li>
              <li className="list-disc">Tailwind CSS</li>
              <li className="list-disc">Git</li>
              <li className="list-disc">Subversion</li>
            </ul>
          </div>
        </div>
        {/* DESIGN */}
        <div className="w-full p-9">
          <h3 className="text-xl pb-5">02 Design</h3>
          <p className="pb-5">
            Like what you see? Let’s create something that matters! Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore.
          </p>
          <div className="w-full flex flex-col md:flex-row pl-5">
            <ul className="w-1/2">
              <li className="list-disc">UX-Design</li>
              <li className="list-disc">Webdesign</li>
              <li className="list-disc">Prototyping</li>
              <li className="list-disc">Adobe Creative Cloud</li>
              <li className="list-disc">Figma</li>
            </ul>
          </div>
        </div>
        {/* RESEARCH */}
        <div className="w-full p-9">
          <h3 className="text-xl pb-5">03 Reasearch</h3>
          <p className="pb-5">
            Like what you see? Let’s create something that matters! Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore.
          </p>
          <div className="w-full flex flex-col md:flex-row pl-5">
            <ul className="w-1/2">
              <li className="list-disc">AB-Testing</li>
              <li className="list-disc">Usability-Tests</li>
              <li className="list-disc">Persona</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:min-h-[90vh] bg-white p-14">
        <div className="w-full h-full bg-slate-500">
          <span>HELLO</span>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
