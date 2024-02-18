import React, { useRef, useState } from "react";
import "./Contents.css";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Contents() {
  const scrollSectionRef = useRef(null);
  const scrollSectionRef2 = useRef(null);

  const [translation, setTranslation] = useState(0);

  const handleScrollRight = () => {
    const scrollSection = scrollSectionRef2.current;
    const sectionWidth = scrollSection.offsetWidth;
    setTranslation((prevTranslation) => prevTranslation - sectionWidth);
  };

  let sections = [
    {
      section_name: "Recommended for you",
      list: [
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Enola Holmes",
          rating: 8,
          poster: "enola_holmes.jpg",
        },
        {
          name: "Intersteller",
          rating: 9,
          poster: "intersteller.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Enola Holmes",
          rating: 8,
          poster: "enola_holmes.jpg",
        },
        {
          name: "Intersteller",
          rating: 9,
          poster: "intersteller.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
      ],
    },
    {
      section_name: "In Theatres",
      list: [
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Enola Holmes",
          rating: 8,
          poster: "enola_holmes.jpg",
        },
        {
          name: "Intersteller",
          rating: 9,
          poster: "intersteller.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Enola Holmes",
          rating: 8,
          poster: "enola_holmes.jpg",
        },
        {
          name: "Intersteller",
          rating: 9,
          poster: "intersteller.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
      ],
    },
    {
      section_name: "Watchlist",
      list: [
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Enola Holmes",
          rating: 8,
          poster: "enola_holmes.jpg",
        },
        {
          name: "Intersteller",
          rating: 9,
          poster: "intersteller.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
        {
          name: "Intersteller",
          rating: 9,
          poster: "intersteller.jpg",
        },
        {
          name: "Godzilla",
          rating: 8,
          poster: "godzilla.jpg",
        },
        {
          name: "Batman",
          rating: 7,
          poster: "batman.jpg",
        },
      ],
    },
  ];

  return (
    <div id="main-contents">
      {sections.map((element, index) => {
        return index === 1 ? (
          <div>
          <h1 className="section_name underline-effects ">{element.section_name}</h1>
            <Swiper
              modules={[Navigation]}
              slidesPerView={6}
              spaceBetween={0}
              
              breakpoints={{
                "@0.00": {
                  slidesPerView: 2, // Set the number of slides per view for screen width less than 600px
                },
                "@0.75": {
                  slidesPerView: 4, // Set the number of slides per view for screen width between 600px and 750px
                },
                "@1.00": {
                  slidesPerView: 6, // Set the number of slides per view for screen width between 750px and 1000px
                },
                // Add more breakpoints as needed
              }}
              className="mySwiper"
            >
              {element.list.map((element) => {
                return (
                    <SwiperSlide slideClass="swiper-slide">
                    <Link
                      to={`/deflix.react/home/movies/${element.name}`}
                      onClick={scrollToTop}
                    >
                      <div className="swiper-slide-content">
                        <img src={`./images/${element.poster}`} alt="" />
                        <div className="info">
                          <h3>{element.name}</h3>
                          <h4>{element.rating} / 10</h4>
                        </div>
                      </div>
                  </Link>
                    </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="genres">
              <h1 className="section_name underline-effects">Genres</h1>
              <div className="genre">
                {[
                  "Bollywood",
                  "Romance",
                  "Adventure",
                  "Thriller",
                  "Fiction",
                  "Comedy",
                  "Scifi",
                  "Fantasy",
                ].map((element) => {
                  return <a href="#">{element}</a>;
                })}
              </div>
            </div>
          </div>
        ) : (
          <>
          <h1 className="section_name underline-effects">{element.section_name}</h1>
            <Swiper
              modules={[Navigation]}
              slidesPerView={6}
              spaceBetween={0}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 2, // Set the number of slides per view for screen width less than 600px
                },
                "@0.75": {
                  slidesPerView: 4, // Set the number of slides per view for screen width between 600px and 750px
                },
                "@1.00": {
                  slidesPerView: 6, // Set the number of slides per view for screen width between 750px and 1000px
                },
                // Add more breakpoints as needed
              }}
              className="mySwiper"
            >
              {element.list.map((element) => {
                return (
                  <SwiperSlide slideClass="swiper-slide">
                  <Link
                    to={`/deflix.react/home/movies/${element.name}`}
                    onClick={scrollToTop}
                  >
                    <div className="swiper-slide-content">
                      <img src={`./images/${element.poster}`} alt="poster" />
                      <div className="info">
                        <h3>{element.name}</h3>
                        <h4>{element.rating} / 10</h4>
                      </div>
                    </div>
                </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        );
      })}
    </div>
  );
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
};
export default Contents;
