import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.tagName !== "IMG") {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <div className="backdrop" onClick={handleClick}>
        <img src={selectedImage} alt="zoomed in pic" />
      </div>
    </>
  );
};

export default Modal;
