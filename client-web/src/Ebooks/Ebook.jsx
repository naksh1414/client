import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { FaArrowCircleDown } from "react-icons/fa";
const { Meta } = Card;

const Ebooks = () => {
  const [ebooks, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const ebooksResponse = await axios.get(
        "http://localhost:8000/Material/ebooks"
      );
      console.log("books", ebooksResponse.data);
      setBooks(ebooksResponse.data);
      console.log("url " + ebooksResponse.file);
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
    useEffect(() => {
    fetchData();
      }, []);
     return (
    <div>
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
  );
};

export default Ebooks;