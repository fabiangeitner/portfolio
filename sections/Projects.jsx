import React from "react";

const Projects = () => {
  return (
    <div className="w-full min-h-[90vh] bg-white">
      <div className="py-9">
        <h2 className="text-7xl">Projekte</h2>
        <div className="w-full flex flex-col justify-center items-center py-9 px-[70px]">
          <div className="w-full h-[500px] flex justify-center items-center overflow-hidden">
            <img
              className="w-full"
              src="https://cdn.pixabay.com/photo/2022/03/18/17/38/pattern-7077094_1280.png"
            />
          </div>
          <div className="w-full md:w-full py-9">
            <div className="lg:w-1/2 flex flex-col">
              <span className="text-xl pb-3">Hello World</span>
              <span className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                laborum voluptatum laboriosam ullam explicabo iure esse cumque
                tempore, soluta, cupiditate architecto aliquid vitae qui atque
                magnam quibusdam nisi sint? Est?
              </span>
            </div>
          </div>
          <button className="">Mehr erfahren</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
