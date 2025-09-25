import React from "react";

const InternationalOperations = () => {
  return (
    <div className=" px-6 md:px-14 py-10 md:py-20 space-y-8">
      <div className=" w-full text-center mx-auto space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          International <span className="text-secondary">Operations</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our international presence is supported by procurement operations in
          Guangzhou, China, managed through our own sourcing office, and a
          business facilitation office in the Dubai Free Zone, enabling
          expansion across the Middle East, Africa, and Asia.
        </p>
      </div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/hecCjhFjGfA?si=eV7eainFmJgcP7yG"
          className="w-full h-[300px] md:h-[500px] rounded-xl pointer-events-none group-hover:pointer-events-auto"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InternationalOperations;
