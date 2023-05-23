import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#CD9003",
    inactiveFillColor: "#A1A1A1",
  };

  return (
    <section className="py-32">
      <div className="container">
        <div>
          <SectionTitle
            heading={"TESTIMONIALS"}
            subHeading={"What Our Clients Say"}
          />
        </div>
        <div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="px-24 text-center font-inter">
                  <div className="flex-col flex items-center mb-10">
                    <Rating
                      style={{ maxWidth: 250 }}
                      value={review.rating}
                      itemStyles={myStyles}
                      readOnly
                      className="mb-12"
                    />
                    <FaQuoteLeft className="text-[100px] text-neutral " />
                  </div>
                  <p className="text-xl text-[#444] mb-2">{review.details}</p>
                  <h2 className="text-rating text-3xl font-medium ">
                    {review.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
