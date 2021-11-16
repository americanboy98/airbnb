import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-80 w-80">
        <img className="rounded-lg" src={img} alt="second card images" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
