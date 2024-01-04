import { Carousel, Card } from "antd";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Contact from "../contact/Contact";
const { Meta } = Card;

function Home() {
  const [banners, setBanners] = useState([]);
  const [paidCourses, setPaidCourses] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  var userId = localStorage.getItem("userId");
  const [detail, setDetail] = useState([]);
  const fetchData = async () => {
    try {
      // Fetch paid courses
      const paidCoursesResponse = await axios.get(
        "http://localhost:8000/course"
      );
      setPaidCourses(paidCoursesResponse.data);

      // Fetch banners
      const bannersResponse = await axios.get("http://localhost:8000/banners");
      setBanners(bannersResponse.data);

      const userOrdersResponse = await axios.get(
        "http://localhost:8000/userorders",
        { userId }
      );
      setUserOrders(userOrdersResponse.data);

      //  userOrders.map((user) => {
      //   if ("K6DE9W9GCRS0GZKDHXFS" === user.user_uid) {
      //     type.current = user.type;
      //     console.log(user.type);
      //   }
      //   return null;
      // });

      const details = [];

      userOrdersResponse.data.forEach((order) => {
        if ("K6DE9W9GCRS0GZKDHXFS" === order.user_uid) {
          details.push(order.details);
        }
      });

      setDetail(details);
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
    <>
      {/* NavBar Component (if you want to include it) */}
      {!userId ? (
        <div>
          <div className="flex flex-col h-[160px] mt-[5px] md:mt-[4px]">
            <Carousel className="flex justify-center" autoplay effect="fade">
              {banners.map((banner) => (
                <div key={banner.id}>
                  <img
                    src={banner.image}
                    style={{ width: "100%", height: 450, objectFit: "contain" }}
                  />
                </div>
              ))}
            </Carousel>
            <div className="flex flex-wrap justify-center mt-4">
              <h1 className="font-semibold text-4xl cursor-pointer text-center w-full my-8">
                Course{" "}
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
                    <a href="/Material">
                      <FaArrowCircleRight className="absolute h-8 w-8 right-[10px] bottom-2" />
                    </a>
                  </Card>
                </div>
              ))}
            </div>
            <Contact />
          </div>
        </div>
      ) : (
        <div>
          <Carousel className="flex justify-center" autoplay effect="fade">
            {banners.map((banner) => (
              <div key={banner.id}>
                <img
                  src={banner.image}
                  style={{ width: "100%", height: 450, objectFit: "contain" }}
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-wrap justify-center mt-4">
            <h1 className="font-semibold text-4xl cursor-pointer text-center w-full my-8">
              Your Course{" "}
            </h1>

            {paidCourses.map((course, index) =>
              detail.includes(course.id + "") ? (
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
                    <a href="/Material">
                      <FaArrowCircleRight className="absolute h-8 w-8 right-[10px] bottom-2" />
                    </a>
                  </Card>
                </div>
              ) : (
                ""
              )
            )}
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
