import React from "react";
// import "./ImageLink.css";

const ImageLink = () => {
  return (
    <div>
      <p className="f3 center">
        {"To magiczne pudełko odgadnie co znajduje się na zdjęciu"}
      </p>
      <div className='center'>
        <div className="pa5 center">
          <input className="fa4 pa2 w-70 center" type="text" />
          <button className="w-40 grow f6 bg-light-blue">
            Odgadnij
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLink;
