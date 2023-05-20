import React from "react";

const Projects = () => {
  const projektListe = [
    {
      id: 1,
      linkId: "projekt-a",
      title: "Projekt A",
      service: "UI-Design, Webdesign, AdobeXD",
      information: "Markenstrategie und Werbekampagne für Projekt A",
      imgTeaser:
        "https://images.unsplash.com/photo-1658238613864-07d8c7406f22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      mockupAlt: "Projekt A",
    },
    {
      id: 2,
      linkId: "projekt-b",
      title: "Projekt B",
      service: "UI-Design, Webdesign, AdobeXD",
      information:
        "Webdesign für die Internetpräsenz des Familienunternehmen Projekt B",
      imgTeaser:
        "https://images.unsplash.com/photo-1581871737047-6d39b780a030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      mockupAlt: "Projekt B",
    },
    {
      id: 3,
      linkId: "projekt-c",
      title: "Projekt C",
      service: "UI-Design, Webdesign, AdobeXD",
      information: "Usability-Testing für das Projekt C",
      imgTeaser:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      mockupAlt: "Projekt C",
    },
  ];

  return (
    <div className="w-full min-h-[90vh] bg-white">
      <div className="py-20">
        <h2 className="text-5xl sm:text-7xl mb-20 uppercase text-slate-500 opacity-25">
          Projekte
        </h2>
        {projektListe.map((projekt) => {
          return (
            <div
              className="w-full h-[700px] flex flex-col justify-center items-center py-9 px-[70px]"
              key={projekt.id}
            >
              <div className="w-full flex justify-center items-center overflow-hidden">
                <img
                  className="w-full opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 cursor-pointer"
                  src="https://images.unsplash.com/photo-1581871737047-6d39b780a030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                />
              </div>
              <div className="w-full md:w-full py-9">
                <div className="lg:w-1/2 flex flex-col">
                  <span className="text-xl pb-3">{projekt.title}</span>
                  <span className="text-base">{projekt.information}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="w-full flex justify-center items-center">
          <button className="">Mehr erfahren</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
