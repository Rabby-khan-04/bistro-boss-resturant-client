import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import slide1 from "../../../assets/home/01.jpg";
import slide2 from "../../../assets/home/02.jpg";
import slide3 from "../../../assets/home/03.png";
import slide4 from "../../../assets/home/04.jpg";
import slide5 from "../../../assets/home/05.png";
import slide6 from "../../../assets/home/06.png";

const Banner = () => {
  const sliderImages = [slide1, slide2, slide3, slide4, slide5, slide6];
  return (
    <section>
      <Carousel showStatus={false} autoPlay={true}>
        {sliderImages.map((image, index) => (
          <div key={index} className="slider__img__container h-[800px]">
            <img src={image} className="h-full object-cover object-center" />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
