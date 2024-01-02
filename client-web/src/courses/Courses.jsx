import { Card } from "antd";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const { Meta } = Card;

const Courses = () => {
  const [paidCourses, setPaidCourses] = useState([]);

  useEffect(() => {
    // Fetch paid courses from the backend when the component mounts
    axios
      .get("http://localhost:8000/course")
      .then((response) => setPaidCourses(response.data))
      .catch((error) => {
        console.error("Error fetching paid courses:", error);
        console.log(error.response); // Log the error response for more details
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <h1 className="font-semibold text-2xl cursor-pointer text-center w-full my-8">
          Courses
        </h1>
        {paidCourses.map((course, index) => (
          <div
            key={index}
            className="flex justify-around my-6 mx-4"
            style={{ flexBasis: "30%" }}
          >
            <Card
              hoverable
              style={{ width: 240, height: 340 }}
              cover={<img alt="example" src={`${course.image}` }  style={{ height: "250px", objectFit: "contain" }} />}
            >
              <Meta
                title={
                  <div
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      whiteSpace: "normal",
                      WebkitLineClamp: 2, // Adjust the number of lines displayed
                    }}
                  >
                    {course.title}
                  </div>
                }

                // description={course.description}
              />
              <a href="/Material">
                <FaArrowCircleRight className="absolute h-8 w-8 right-[10px] bottom-2" />
              </a>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
