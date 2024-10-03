import React from "react";

type Props = {};

const BookCard = ({ title, description, coverImage, onClick }: any) => {
  return (
    <div 
    className="w-[200px] p-[1rem] mb-5 rounded-sm bg-[#f8eadd] cursor-pointer transition-transform duration-300 ease" 
    style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',}} 
    onClick={onClick}>
      <img src={coverImage} alt={title} 
      className="w-[100%] aspect-[1] rounded-[5px]"/>
      <div className="">
        <h3 className="text-[1.2rem] text-[#000]">{title}</h3>
        <p className="text-[0.8rem] text-#888">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
