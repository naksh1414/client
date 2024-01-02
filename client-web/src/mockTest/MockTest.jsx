import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbSquareLetterA } from "react-icons/tb";
import { TbSquareLetterB } from "react-icons/tb";
import { TbSquareLetterC } from "react-icons/tb";
import { TbSquareLetterD } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";
import "./MockTest.css";

const MockTest = () => {
  const initialDuration = 2 * 60 * 60; // 2 hours in seconds
  const [time, setTime] = useState({
    hours: Math.floor(initialDuration / 3600),
    minutes: Math.floor((initialDuration % 3600) / 60),
    seconds: initialDuration % 60,
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timerInterval);
          // Add logic for what should happen when the timer reaches 0.
          // For example, displaying a message or triggering a function.
        } else {
          const newSeconds = prevTime.seconds - 1;

          if (newSeconds < 0) {
            const newMinutes = prevTime.minutes - 1;
            const newHours = prevTime.hours - (newMinutes < 0 ? 1 : 0);

            return {
              hours: newHours < 0 ? 0 : newHours,
              minutes: newMinutes < 0 ? 0 : newMinutes,
              seconds: 59,
            };
          } else {
            const newMinutes = Math.floor(newSeconds / 60);

            return {
              hours: prevTime.hours,
              minutes: newMinutes >= 0 ? newMinutes : 0,
              seconds: newSeconds % 60,
            };
          }
        }
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="test">
      <div className="mocktest">
        <div className="header">
          <div className="back">
            <IoMdArrowRoundBack className="backicon" />
          </div>
          <p>Questions</p>
          <div className="Timer">
            <span>{String(time.hours).padStart(2, "0")}:</span>
            <span>{String(time.minutes).padStart(2, "0")}:</span>
            <span>{String(time.seconds).padStart(2, "0")}</span>
          </div>
        </div>
        <div className="qAns">
          <p>Questions Answered: 0/5 </p>
        </div>
        <div className="mcq">
          <div className="ques">
            <FaQuestion className="quesmark" />
            <p>
              Q.1 <span>Question</span>
            </p>
          </div>
          <div className="o1">
            <TbSquareLetterA className="options" />
            <p>Option 1</p>
          </div>
          <div className="o2">
            <TbSquareLetterB className="options" />
            <p>Option 2</p>
          </div>
          <div className="o3">
            <TbSquareLetterC className="options" />
            <p>Option 3</p>
          </div>
          <div className="o4">
            <TbSquareLetterD className="options" />
            <p>Option 4</p>
          </div>
        </div>
        <div className="prevNext">
          <button className="prev p-3">PREVIOUS</button>
          <button className="next p-3">NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
