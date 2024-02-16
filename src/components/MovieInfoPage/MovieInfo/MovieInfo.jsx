import React from "react";
import "./MovieInfo.css";
import CastCrew from "../CastAndCrew/CastCrew";
import { Link } from "react-router-dom";

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
              <button className="rateBtn btn">Rate Now</button>
              <button className="addBtn btn">Add to Watchlist</button>
            </div>
          </div>
          <div className="reviews">
            <h1>Reviews</h1>
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
        <div className="descrpition">
          <h1>Description</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, in recusandae magnam porro, omnis quos voluptatibus explicabo veritatis accusamus iste expedita possimus sequi doloribus qui necessitatibus quia quidem repudiandae deserunt quam deleniti inventore distinctio, libero debitis. Ducimus et quos necessitatibus ratione odit consequatur temporibus, perferendis ab, fugiat quod maxime dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quam sapiente neque architecto fuga ullam cumque fugit magnam dolorum libero porro, voluptas ex esse repellendus tenetur sit iure! Itaque, facere!lorem40
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi sint, cupiditate laborum eos aut libero molestiae quibusdam aliquam eaque id ut quae laudantium cum dolorum nostrum voluptas veniam at alias deleniti minus, aliquid nemo quo! Exercitationem quibusdam architecto a Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis deleniti veritatis placeat tempora, a eius suscipit cumque aliquam itaque, nisi iure doloremque maiores sunt sapiente culpa quasi corporis quod nulla! Deleniti dolor, illo aspernatur debitis, nobis harum voluptatum magnam voluptates molestiae nostrum cupiditate magni eaque porro recusandae, ex beatae?sum, dolor sit amet consectetur adipisicing elit. Eligendi, in recusandae magnam porro, omnis quos voluptatibus explicabo veritatis accusamus iste expedita possimus sequi doloribus qui necessitatibus quia quidem repudiandae deserunt quam deleniti inventore distinctio, libero debitis. Ducimus et quos necessitatibus ratione odit consequatur temporibus, perferendis ab, fugiat quod maxime dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quam sapiente neque architecto fuga ullam cumque fugit magnam dolorum libero porro, voluptas ex esse repellendus tenetur sit iure! Itaque, facere!lorem40
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi sint, cupiditate laborum eos aut libero molestiae quibusdam aliquam eaque id ut quae laudantium cum dolorum nostrum voluptas veniam at alias deleniti minus, aliquid nemo quo! Exercitationem quibusdam architecto a Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis deleniti veritatis placeat tempora, a eius suscipit cumque aliquam itaque, nisi iure doloremque maiores sunt sapiente culpa quasi corporis quod nulla! Deleniti dolor, illo aspernatur debitis, nobis harum voluptatum magnam voluptates molestiae nostrum cupiditate magni eaque porro recusandae, ex beatae.
          </p>
        </div>
        <CastCrew />
        <div className="relatedMovies">
       {relatedMovies.map((element, index)=>{
        return (
          <div className="section">
          <h2>{element.section_name}</h2>
          <div className="cards">
            {element.list.map((element) => {
              return (
                <Link to={`/deflix.react/home/movies/${element.name}`} onClick={scrollToTop}>
                <div className="card">
                  <img src={`${element.poster}`} alt="" />
                  <div className="info">
                    <h3>{element.name}</h3>
                    <h4>{element.rating} / 10</h4>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
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
