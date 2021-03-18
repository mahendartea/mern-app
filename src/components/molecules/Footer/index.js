import React from "react";
import Logoe from "../../../assets/icons/messenger.png";
import FbLogo from "../../../assets/icons/facebook.svg";
import TwitLogo from "../../../assets/icons/twitter.svg";
import InstaLogo from "../../../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <div className="">
      <div className="flex bg-kedua px-10 py-4 justify-between text-center flex-col sm:flex-row text-white ">
        <div className="bg-putih p-2 rounded-md shadow-lg">
          <img src={Logoe} alt="image" className="h-16 w-16" />
          <p className="font-semibold text-kedua">Elearning Indonesia</p>
        </div>
        <div className="">
          <h1 className="font-semibold text-putih pb-2">Media Sosial</h1>
          <div className="flex mt-1">
            <img src={FbLogo} className="h-7 w-7 mx-1 " alt="image" />
            <img src={TwitLogo} className="h-7 w-7 mx-1" alt="image" />
            <img src={InstaLogo} className="h-7 w-7 mx-1" alt="image" />
          </div>
        </div>
        <p className="text-sm text-putih">Copyright@2021</p>
      </div>
    </div>
  );
};

export default Footer;
