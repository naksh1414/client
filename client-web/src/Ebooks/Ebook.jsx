import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { FaArrowCircleDown } from "react-icons/fa";
const { Meta } = Card;
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../mockTest/MockTest_name.css";

const Ebooks = () => {
  const history = useNavigate();
  const [ebooks, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const ebooksResponse = await axios.get("http://localhost:8000/ebooks");

      setBooks(ebooksResponse.data);
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
  const handleBackClick = () => {
    history(`/`);
  };
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      history("/login");
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-center mt-4">
      <div className="mmm w-full test-center flex-col">
        <div className="mmmm w-1/2">
          <div className="back flex-row">
            <IoMdArrowRoundBack
              className="backicon cursor-pointer"
              onClick={handleBackClick}
            />
          </div>
          <h1 className="font-semibold text-4xl cursor-pointer text-center name  my-8">
            EBooks{" "}
          </h1>
        </div>

        {ebooks.map((ebook, index) => (
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
                  src={ebook.image}
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
                    {ebook.title}
                  </div>
                }
              />
              <a href={ebook.file}>
                <FaArrowCircleDown className="absolute h-8 w-8 right-[10px] bottom-2" />
              </a>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ebooks;
