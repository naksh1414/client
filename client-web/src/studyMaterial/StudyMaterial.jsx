// import React from 'react'

import { Card } from "antd";
// import NavBar from "../components/NavBar";
import { FaArrowCircleRight } from "react-icons/fa";

const courseData = [
  {
    Title: "Recorded Videos",
  },
  {
    Title: "Live Videos",
  },
  {
    Title: "PDF Notes",
  },
  {
    Title: "Mock Tests",
  },
];
const { Meta } = Card;

const StudyMaterial = () => {
  return (
    <>
      {/* <NavBar/> */}
      <div className="flex flex-wrap justify-center mt-4 -z-10">
        <h1 className="font-semibold text-2xl cursor-pointer text-center w-full my-8">
          Study Material
        </h1>
        {courseData.map((course, index) => (
          <div
            key={index}
            className=" flex justify-around my-6 mx-4"
            style={{ flexBasis: "30%" }}
          >
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              }
            >
              <Meta title={course.Title} /**description="www.instagram.com"*/ />
              <a href="/video">
                <FaArrowCircleRight className=" absolute h-8 w-8 right-[10px] bottom-2" />
              </a>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudyMaterial;
