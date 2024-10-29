import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";
import { Link } from "react-router-dom";
const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-[360px] lg:w-[28%] gap-x-2 ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-caribbeangreen-200"
          : "bg-dblue"
      }  text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-1">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400">{cardData?.description}</div>
        
       <div className="   h-14  py-2 text-caribbeangreen-100 font-bold">
       <p>Tutor: {
          cardData?.Tutor  
        }
        
        </p>
        Experience:{
          cardData?.Experience  
        }
       </div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-white"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>


        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Days Needed</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;