import React, { useState, useEffect } from "react";
import BaseCTA from "../Buttons/BaseCTA.jsx";

function MainMessage({
  clearMessages,
  messages,
  progressBarBg,
  progressBarSliderBg,
  modelBg,
  modelBorderColor,
  iconColor,
  textColor,
  icon,
}) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setVisible(true);
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 30);
    const timer2 = setTimeout(() => {
      setVisible(false);
      clearMessages();
      setProgress(0);
    }, 3000);
    return () => {
      clearInterval(timer);
      clearTimeout(timer2);
    };
  }, [messages]);

  const handleClose = () => {
    setVisible(false);
    clearMessages();
  };

  return visible ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-20"></div>
      <div
        className={`absolute top-0 left-0 right-0 flex items-center justify-center ${progressBarBg}`}
      >
        <div className="flex h-16 w-80 items-center justify-center rounded-lg bg-white p-4 shadow-xl">
          <div
            className={`h-2 ${progressBarSliderBg}`}
            style={{ width: `${progress}%`, maxWidth: "80vw" }}
          ></div>
        </div>
      </div>
      <div
        className={`relative z-10 flex flex-col items-center justify-center rounded-lg
        border-4 ${modelBorderColor} ${modelBg} p-6 shadow-xl`}
      >
        <div className="mb-4 animate-pulse">
          <svg
            className={`h-12 w-12 ${iconColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={icon}
            />
          </svg>
        </div>
        <ul
          className={`list-inside list-disc text-center text-lg font-bold ${textColor}`}
        >
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <div className="mt-6 flex w-full justify-center">
          <BaseCTA
            onClick={handleClose}
            text="Close"
            background={"ring-red-700"}
          />
          <div
            className="bg-primary-600 hover:bg-primary-700 ml-4 rounded-lg bg-gray-800 px-4 py-2 text-center text-sm
           font-medium capitalize
            text-white outline-none ring-4 lg:px-5 lg:py-2.5"
          >
            {Math.floor((3000 - progress * 30) / 1000)} seconds
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default MainMessage;
