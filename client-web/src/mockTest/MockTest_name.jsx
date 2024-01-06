import { Card } from "antd";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./MockTest_name.css";
const { Meta } = Card;
const MockTest_name = () => {
  const history = useNavigate();
  const userId = localStorage.getItem("userId");
  const [mT, setMT] = useState([]);
  const mocktest_title = localStorage.getItem("mockTest_title");

  //   const mockTest_name = localStorage.getItem("mockTest_name");
  const mockTest_id = localStorage.getItem("mockTest_id");

  const fetchData = async () => {
    try {
      // Fetch paid courses
      const mock_tests_response = await axios.post(
        `http://localhost:8000/tests/${mockTest_id}`
      );
      setMT(mock_tests_response.data);
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

  const handleClick = (mocktest_id_test_id, test_time) => {
    localStorage.setItem("mockTest_id_test_id", mocktest_id_test_id);
    localStorage.setItem("test_time", test_time);
    history(`/tests/${mockTest_id}/${mocktest_id_test_id}`);
  };
  const handleBackClick = () => {
    localStorage.removeItem("mockTest_id");
    history(`/tests`);
  };

  useEffect(
    () => {
      if (!localStorage.getItem("userId")) {
        history("/login");
      }
      fetchData();
    },
    [
      /**type*/
    ]
  );

  return (
    <div className="flex flex-wrap justify-center mt-4">
      <div className="mmm w-full test-center ">
        <div className="mmmm w-1/2">
          <div className="back">
            <IoMdArrowRoundBack
              className="backicon cursor-pointer"
              onClick={handleBackClick}
            />
          </div>
          <h1 className="font-semibold text-4xl cursor-pointer text-center name  my-8">
            {mocktest_title}{" "}
          </h1>
        </div>
      </div>

      {mT.map((course, index) => (
        <div
          key={index}
          className="flex justify-around my-6 mx-4"
          style={{ flexBasis: "30%" }}
        >
          <Card
            hoverable
            style={{ width: 240, height: 340 }}
            cover={
              <img
                alt="example"
                src={`${course.image}`}
                style={{ height: "250px", objectFit: "contain" }}
              />
            }
          >
            <Meta
              title={
                <div
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    whiteSpace: "normal",
                    WebkitLineClamp: 2,
                  }}
                >
                  {course.title}
                </div>
              }
            />
            <a
              href={userId ? "" : ""}
              onClick={() => handleClick(course.id, course.test_time)}
            >
              <FaArrowCircleRight className="absolute h-8 w-8 right-[10px] bottom-2" />
            </a>{" "}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MockTest_name;
