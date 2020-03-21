import React from "react";

const ServisesItem = ({ title, imageUrl }) => {
  return (
    <div className="serv__item" >
      <div className="serv__item-bg-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="serv__item-text-wrapper">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServisesItem;
