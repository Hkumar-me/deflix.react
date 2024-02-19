import React, { useRef, useState, useEffect } from "react";
import "./Contents.css";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function Contents() {
  const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      async function fetchMovieData() {
        const url = 'https://imdb146.p.rapidapi.com/v1/find/?query=game';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '0df54359b3mshbd7b7a9767dc511p11c103jsn2c3ca5f224bb',
            'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
          }
        };
  
        try {
          // const response = await fetch(url, options);
          // const result = await response.json();
          if(true){
            setMovies([
              {
                name: "Godzilla",
                rating: 8,
                poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Batman",
                rating: 7,
                poster: "https://images.unsplash.com/photo-1590682620381-08165da96779?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Enola Holmes",
                rating: 8,
                poster: "https://images.unsplash.com/photo-1601925662822-510b76665bd9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Intersteller",
                rating: 9,
                poster: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Batman",
                rating: 7,
                poster: "https://images.unsplash.com/photo-1590682620381-08165da96779?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Enola Holmes",
                rating: 8,
                poster: "https://images.unsplash.com/photo-1601925662822-510b76665bd9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Intersteller",
                rating: 9,
                poster: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Batman",
                rating: 7,
                poster: "https://images.unsplash.com/photo-1590682620381-08165da96779?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Enola Holmes",
                rating: 8,
                poster: "https://images.unsplash.com/photo-1601925662822-510b76665bd9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Intersteller",
                rating: 9,
                poster: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }
            ]);
          }
          else{
          setMovies(result.titleResults.results);
          }
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchMovieData();
    }, []);
    




  let sections = [
    {
      section_name: "Recommended for you",
      list:movies
    },
    {
      section_name: "In Theatres",
      list:movies
    },
    {
      section_name: "Watchlist",
      list:movies
    }
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
                      to={`/deflix.react/home/movies/${element?.titleNameText}`}
                      onClick={scrollToTop}
                    >
                      <div className="swiper-slide-content">
                        <img src={`${element?.titlePosterImageModel?.url ?? element?.poster}`} alt="" />
                        <div className="info">
                          <h3>{element?.titleNameText ?? element?.name}</h3>
                          <h4>{element?.id ?? element?.rating} / 10</h4>
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
                      to={`/deflix.react/home/movies/${element?.titleNameText}`}
                      onClick={scrollToTop}
                    >
                      <div className="swiper-slide-content">
                        <img src={`${element?.titlePosterImageModel?.url ?? element?.poster}`} alt="" />
                        <div className="info">
                          <h3>{element?.titleNameText ?? element?.name}</h3>
                          <h4>{element?.id ?? element?.rating} / 10</h4>
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