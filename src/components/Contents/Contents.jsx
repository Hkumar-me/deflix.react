import React, { useRef, useState } from "react";
import "./Contents.css";
import { Link } from "react-router-dom";

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
        }, {
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
      ],
    },
  ];

  return (
    <div id="main-contents">
      {sections.map((element, index) => {
        return index === 1 ? (
          <div>
            
            <div className="section">
              <h2>{element.section_name}</h2>
              <div className="cards" >
                {element.list.map((element) => {
                  return ( <Link to={`/deflix.react/home/movies/${element.name}`} onClick={scrollToTop}>
                    <div className="card" ref={scrollSectionRef}>
                      <img src={`images/${element.poster}`} alt="" />
                      <div className="info">
                        <h3>{element.name}</h3>
                        <h4>{element.rating} / 10</h4>
                      </div>
                    </div>
                    </Link> );
                })}
              </div>
            </div>
            <div className="genres">
            <h1>Genres</h1>
            <div className="genre">
            {[
              "Bollywood",
              "Romance",
              "Adventure",
              "Thriller",
              "Fiction",
              "Comedy",
              "Scifi",
              "Fantasy"
            ].map((element) => {
              return <a href="#">{element}</a>;
            })}
            </div>
            </div>
          </div>
        ) : (
          
          <div className="section">
            <h2>{element.section_name}</h2>
            <div className="cards">
              {element.list.map((element) => {
                return (
                <Link to={`/deflix.react/home/movies/${element.name}` } onClick={scrollToTop}>
                  <div className="card" ref={scrollSectionRef2} style={{ transform: `translateX(${translation}px)` }}>
                    <img src={`images/${element.poster}` } alt="" />
                    <div className="info">
                      <h3>{element.name}</h3>
                      <h4>{element.rating} / 10</h4>
                    </div>
                  </div>
                  </Link>

                );
              })}
              
            </div>
            
            <button onClick={handleScrollRight}>Scroll Right</button>
          </div>
        );
      })}
    </div>
  );
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
}
export default Contents;
