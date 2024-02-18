import React from "react";
import "./MovieInfo.css";
import CastCrew from "../CastAndCrew/CastCrew";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Description from "./Description";
import Button from '../../Buttons/Button';

function MovieInfo() {

  


  let userReviews = [
    {
      name: "User name",
      photo:
        "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sapiente numquam quas optio fugit error quaerat autem temporibus velit dicta.",
    },
    {
      name: "User name",
      photo:
        "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsumt dicta.",
    },
    {
      name: "User name",
      photo:
        "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sapiente numquam quas optio fugit error quaerat autem temporibus velit dicta.",
    },
    {
      name: "User name",
      photo:
        "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sapiente numquam quas optio fugit error quaerat autem temporibus velit dicta.",
    },
    {
      name: "User name",
      photo:
        "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsumt dicta.",
    },
    {
      name: "User name",
      photo:
        "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sapiente numquam quas optio fugit error quaerat autem temporibus velit dicta.",
    },
    {
      name: "User name",
      photo:
        "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sapienteLorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sapiente numquam quas optio fugt error quaera numquam quas optio fugt error quaerat autem temporibus velit dicta.",
    },
  ];


  let relatedMovies = [
    {
      section_name: "Related",
      list: [
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
      ]
    }
  ];

  return (
    <>
      <div className="movie-info">
        <div className="topInfo">
          <div className="poster">
            <div className="img-container">
              <div className="posterOverlayInfo">
                <h1>Deewar</h1>
                <div className="releaseYear">
                  <h3>2004</h3>
                  <h3>2h 45min</h3>
                </div>
                <div className="genres">
                  <h2>Drama</h2>
                  <h2>Action</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolores itaque veniam eaque quas suscipit voluptas mollitia quibusdam sapiente obcaecati?</p>
              </div>
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="poster"
            />
            </div>
            <div className="posterBtns">
             <Button value="Rate Now"/>
             <Button value="Add to Watchlist"/>
            </div>
          </div>
          <div className="reviews">
            <h1 className="underline-effects">Reviews</h1>
            
            <div className="reviews-container">
            {userReviews.map((element) => {
              return (
                  <div className="reviewDiv">
                  <div className="userPhoto">
                    <img src={element.photo} alt="userphoto" />
                  </div>
                  <div className="userInfo">
                    <a>{element.name}</a>
                      <p>{element.review}</p>
                  </div>
                </div>
              );
            })}
            
            </div>
          </div>
        </div>
        <div className="descrpition">
          <Description />
        </div>
        <CastCrew />
        <div className="relatedMovies">
       {relatedMovies.map((element, index)=>{
        return (
          <div>
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
                        <img src={`${element.poster}`} alt="" />
                        <div className="info">
                          <h3 >{element.name}</h3>
                          <h4>{element.rating} / 10</h4>
                        </div>
                      </div>
                  </Link>
                    </SwiperSlide>
                );
              })}
            </Swiper>
            </div>
        )
       })}
        </div>
      </div>
    </>
  );
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
}
export default MovieInfo;
