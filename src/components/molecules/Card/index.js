import React from "react";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  let history = useHistory();
  const { image, title, body, name, date } = props;
  return (
    <div className="rounded overflow-hidden shadow-md mx-2 bg-pertama">
      <div className="">
        <img
          className="w-full object-cover h-48 mb-1"
          src={image}
          alt="judul"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
      <div className="px-4 py-2 bg-alttiga">
        <span className="inline-block rounded-md w-full text-xs font-semibold">
          {name}
        </span>
        <span className="inline-block rounded-md w-full text-xs">{date}</span>
      </div>
      <p
        className="cursor-pointer bg-kedua text-putih text-center"
        onClick={() => history.push("/detail-blog")}
      >
        Detail
      </p>
    </div>
  );
};

export default Card;
