import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  const sliderImage = [
    { img: slide1, title: "Salads" },
    { img: slide2, title: "pizzas" },
    { img: slide3, title: "Soups" },
    { img: slide4, title: "desserts" },
    { img: slide5, title: "Salads" },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div>
          <SectionTitle
            heading={"ORDER ONLINE"}
            subHeading={"From 11:00am to 10:00pm"}
          />
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sliderImage.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img src={image.img} className="w-full" alt="" />
                <div className="absolute inset-0 py-6 flex items-end justify-center bg-black bg-opacity-20">
                  <h2 className="text-3xl font-cinzel font-medium text-white">
                    {image.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
