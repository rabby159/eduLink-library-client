import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          "background-image":
            "url(https://i.ibb.co/NC1X95q/2303-w026-n002-3347-B-p1-3347.jpg)",
        }}
        data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className="flex justify-around items-center">
          <div className="">
            <div className="title" data-swiper-parallax="-300">
              New Arrival Books
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              Always find EduLink Library for looking new arrival books.
              </p>
            </div>
            <div className="mt-10">
                <button className="btn btn-outline text-white mr-5">Add Cart</button>
                <button className="btn btn-outline text-white">Order Now</button>
            </div>
          </div>
          <div className="">
            <img 
            className=""
              src={
                "https://i.ibb.co/SQfFCtM/ey-Jid-WNr-ZXQi-Oi-Jhb-Glnbm-Fib-GV3-ZWItc-HJv-ZHVjd-Glvbi-Is-Imtle-SI6-In-Nlcn-Zp-Y2-Vz-L3-Bp-Y3-R1.png"
              }
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-around items-center">
          <div className="">
            <div className="title" data-swiper-parallax="-300">
              Booked your EBooks
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              Always find EduLink Library for booking any e-books.
              </p>
            </div>
            <div className="mt-10">
                <button className="btn btn-outline text-white mr-5">Add Cart</button>
                <button className="btn btn-outline text-white">Order Now</button>
            </div>
          </div>
          <div className="">
            <img 
            className=""
              src={
                "https://i.ibb.co/7XhCH8m/maxresdefault-removebg-preview.png"
              }
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-around items-center">
          <div className="">
            <div className="title" data-swiper-parallax="-300">
              New Arrival Books
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              Always find EduLink Library for looking new arrival books.
              </p>
            </div>
            <div className="mt-10">
                <button className="btn btn-outline text-white mr-5">Add Cart</button>
                <button className="btn btn-outline text-white">Order Now</button>
            </div>
          </div>
          <div className="">
            <img 
            className=""
              src={
                "https://i.ibb.co/Rp4z6BN/BLOG-prev-ui.png"
              }
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Banner;
