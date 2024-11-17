import React from "react";
import Image from "./Image";
import Text from "./Text";

const ServerContent = ({ imgSrc, imgAlt, ServerText1, ServerText2 }) => {
  return (
    <>
      <div className="w-1/3 p-2">
        <Image imgSrc={imgSrc} imgAlt={imgAlt} className={"mb-10"} />
        <Text
          text={ServerText1} as='h1'
          className={
            "text-white font-Plus text-2xl font-bold mb-5 cursor-pointer"
          }
        />
        <Text
          text={ServerText2} as='h1'
          className={
            "text-Servertxt font-Plus text-base font-semibold pr-24 leading-6 "
          }
        />
      </div>
    </>
  );
};

export default ServerContent;
