import React from "react";
import { useState } from "react";
import { FAQItem } from "../interfaces/index"
const FAQ:React.FC<{FAQ:FAQItem[]}>=({FAQ})=>{
  const [active, setActive] = useState<number | null>(null);
  const toggleAcordion = (index:number) => {
    setActive(active === index ? null : index);
  };
 
  
  return (
    <div className=" py-5">
      {/* FAQ Header */}
     
      <h1 className="md:text-4xl text-2xl font-bold leading-[50px] capitalize text-center text-blue-600">
        Frequently Asked Questions
      </h1>

      {/* Accordion Section */}
      <div className="w-full mx-auto  max-w-4xl md:max-w-6xl p-5">
        <div className="space-y-4">
          {FAQ.map((item: FAQItem, index:number) => (
            <div key={index} className="p-4 bg-gray  rounded-lg ">
              <div className="flex flex-row justify-between items-center">
                <h1 className="md:text-1xl text-xl font-medium  flex-1">
                  {item.question}
                </h1>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleAcordion(index)}
                  className=" rounded-full p-2 w-8 h-8 flex items-center justify-center text-[26px]"
                >
                  {active === index ? "-" : "+"}
                </button>
              </div>

              {/* Answer (conditionally rendered) */}
              {active === index && (
                <div className="mt-3 text-[16px] font-light">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

  
  

export default FAQ;
