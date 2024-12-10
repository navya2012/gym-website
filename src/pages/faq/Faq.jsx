import React, { useState } from "react";
import { faqData } from "./FaqData";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-6 md:px-12 px-6 bg-gray-400 bg-opacity-30">
      <div className=" max-w-xl md:max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Frequently Asked Questions
        </h2>

        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left px-6 py-4 text-xl font-medium text-gray-800 bg-white shadow-md focus:outline-none flex justify-between items-center transition-transform duration-300 transform ${
                activeIndex === index ? "scale-x-105" : "hover:scale-105"
              }`}
            >
              {faq.question}
              {activeIndex === index ? (
                <AiOutlineUp size={20} className="text-green-700 transition-transform duration-300 transform rotate-180" />
              ) : (
                <AiOutlineDown size={20} className="text-green-700 transition-transform duration-300 transform" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-50  text-gray-700 rounded-b-lg shadow-md transition-all duration-300 transform scale-105">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
