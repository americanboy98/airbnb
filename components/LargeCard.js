import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative">
      <div className="py-16 cursor-pointer">
        <img
          className="object-cover rounded-2xl h-[24rem] min-w-full"
          src={img}
          alt="huge card image"
        />
      </div>

      <di className="absolute top-32 left-20">
        <h3 className="text-2xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </di>
    </section>
  );
}

export default LargeCard;
