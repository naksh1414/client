import { Carousel, Card } from "antd";
// import NavBar from "../components/NavBar";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const { Meta } = Card;

function Home() {
  const [banners, setBanners] = useState([]);
  const [paidCourses, setPaidCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch paid courses
        const paidCoursesResponse = await axios.get(
          "http://localhost:8000/course"
        );
        setPaidCourses(paidCoursesResponse.data);

        // Fetch banners
        const bannersResponse = await axios.get(
          "http://localhost:8000/banners"
        );
        setBanners(bannersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);

        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received. Request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <div>
        <div className="flex flex-col h-[160px] mt-[5px] md:mt-[4px]">
          <Carousel className="flex justify-center" autoplay effect="fade">
            {banners.map((banner) => (
              <div key={banner.id}>
                <img
                  src={banner.image} // Assuming your database has an 'image_url' field
                  // alt={banner.title}
                  style={{ width: "100%", height: 450, objectFit: "contain" }} // Adjust styles as needed
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-wrap justify-center mt-4">
            <h1 className="font-semibold text-4xl cursor-pointer text-center w-full my-8">
              Courses
            </h1>
            {/* Ensure to use return inside map */}
            {paidCourses.map((course, index) => (
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
        </div>
      </div>
    </>
  );
}

export default Home;
