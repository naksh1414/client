import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbSquareLetterA } from "react-icons/tb";
import { TbSquareLetterB } from "react-icons/tb";
import { TbSquareLetterC } from "react-icons/tb";
import { TbSquareLetterD } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MockTest.css";

const MockTest = () => {
  const history = useNavigate();
  const mockTest_id_test_id = localStorage.getItem("mockTest_id_test_id");
  const mockTest_id = localStorage.getItem("mockTest_id");
  const test_time = localStorage.getItem("test_time");
  const [test, setTest] = useState([]);
  const fetchData = async () => {
    try {
      // Fetch paid courses
      const tests_response = await axios.post(
        `http://localhost:8000/tests/${mockTest_id}/${mockTest_id_test_id}`
      );
      setTest(tests_response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received. Request:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const handleClick = () => {
    localStorage.removeItem("mockTest_id_test_id");
    localStorage.removeItem("test_time");
    history(`/tests/${mockTest_id}`);
  };

  const initialDuration = test_time * 60; // 5 min in seconds
  const [time, setTime] = useState({
    hours: Math.floor(initialDuration / 3600),
    minutes: Math.floor((initialDuration % 3600) / 60),
    seconds: initialDuration % 60,
  });

  useEffect(() => {
    fetchData();
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timerInterval);
          return {
            hours: 0,
            minutes: 0,
            seconds: 0,
          };

          // Add logic for what should happen when the timer reaches 0.
          // For example, displaying a message or triggering a function.
        } else {
          const newSeconds = prevTime.seconds - 1;

          if (newSeconds < 0) {
            const newMinutes = prevTime.minutes - 1;
            if (newMinutes < 0 && prevTime.hours > 0) {
              const newHours = prevTime.hours - 1;
              const newMinutes = 59;
              return {
                hours: newHours < 0 ? 0 : newHours,
                minutes: newMinutes < 0 ? 0 : newMinutes,
                seconds: 59,
              };
            } else {
              const newMinutes = prevTime.minutes - 1;
              const newHours = prevTime.hours;
              return {
                hours: newHours < 0 ? 0 : newHours,
                minutes: newMinutes < 0 ? 0 : newMinutes,
                seconds: 59,
              };
            }
          } else {
            const newMinutes = prevTime.minutes;

            return {
              hours: prevTime.hours,
              minutes: newMinutes >= 0 ? newMinutes : 59,
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
            <IoMdArrowRoundBack className="backicon" onClick={handleClick} />
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
        {test.map((course, index) => (
          <div className="mcq" key={index}>
            <div className="ques">
              <FaQuestion className="quesmark" />
              <p>
                Q.1 <span>{course.question}</span>
              </p>
            </div>
            <div className="o1">
              <TbSquareLetterA className="options" />
              <p>{course.opt_1}</p>
            </div>
            <div className="o2">
              <TbSquareLetterB className="options" />
              <p>{course.opt_2}</p>
            </div>
            <div className="o3">
              <TbSquareLetterC className="options" />
              <p>{course.opt_3}</p>
            </div>
            <div className="o4">
              <TbSquareLetterD className="options" />
              <p>{course.opt_4}</p>
            </div>
          </div>
        ))}
        <div className="prevNext">
          <button className="next p-3">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
