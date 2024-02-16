import React, { useState} from "react";
import { Link } from "react-router-dom";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ResponsiveCarousel.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const data = [
  {
    cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
    title: "Interstellar",
    duration: "169 min",
    description:
      "A group of explorers leaves Earth to travel through a wormhole in search of a new habitable planet.",
  },
  {
    cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
    title: "Inception",
    duration: "148 min",
    description:
      "A skilled thief enters the dreams of others to steal their deepest secrets.",
  },
  {
    cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
    title: "Blade Runner 2049",
    duration: "164 min",
    description:
      "A new blade runner unearths a long-buried secret that could plunge society into chaos.",
  },
  {
    cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
    title: "Iron Man 3",
    duration: "130 min",
    description: "Tony Stark faces a formidable enemy known as The Mandarin.",
  },
  {
    cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
    title: "Venom",
    duration: "112 min",
    description:
      "A journalist becomes the host of an alien symbiote that gives him superpowers.",
  },
  {
    cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
    title: "Steins Gate",
    duration: "24 episodes",
    description:
      "A group of friends accidentally invents a device that can send messages to the past.",
  },
  {
    cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
    title: "One Punch Man",
    duration: "12 episodes",
    description:
      "Saitama, a hero who can defeat any opponent with a single punch, seeks a worthy challenge.",
  },
  {
    cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
    title: "A Silent Voice",
    duration: "130 min",
    description:
      "A former bully tries to make amends with a deaf girl he mistreated in elementary school.",
  },
  {
    cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
    title: "Demon Slayer",
    duration: "26 episodes",
    description:
      "A young boy becomes a demon slayer to avenge his family and save his demon-turned sister.",
  },
  {
    cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
    title: "Attack On Titan",
    duration: "75 episodes",
    description:
      "Humans behind a walled city face enormous humanoid creatures known as Titans.",
  },
];

export default function ResponsiveCarousel(props) {
  const ref = React.useRef();
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        position: "relative",
        marginTop: "3vw",
      }}
    >
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          // if (parentWidth <= 1440) currentVisibleSlide = 3;
          // if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <>
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                carouselWidth={parentWidth}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                useGrabCursor
              />
            </>
          );
        }}
      />
      <>
        <Fab
          style={{ position: "absolute", top: "40%", left: 20, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={(event) => {
            event.preventDefault();
            ref.current?.goBack();
          }}
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          style={{ position: "absolute", top: "40%", right: 20, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <ArrowForwardIcon />
        </Fab>
      </>
    </div>
  );
}

export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover, title, duration, description } = data[dataIndex];
  let [myStyle, setMyStyle] = useState({
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    color: "white",
  });
  return (
    
    <Link to={`/deflix.react/home/movies/${title}`}>
    <div
      style={{
        width: "100vh",
        height: "50vh",
        userSelect: "none",
        overflow: "hidden",
        borderRadius: 20,
        position: "relative"
      }}
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 20,
          position: "relative",
          overflow: "hidden"
        }}
        draggable={false}
        src={cover}
      />
      <div style={myStyle}>
        <div
          style={{
            position: "absolute",
            color: "white",
            fontSize: "20px",
            opacity: 1,
            zIndex: 555,
            padding: "20px",
            bottom: "0%",
            width:"100%",
            backgroundColor: "#0000008f",
            userSelect: "none",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontStyle:"italic",
            }}
          >
            {title}
          </h1>
          <h2
            style={{
              fontSize: "16px",
              opacity:"0.7"
            }}
          >
            {duration}
          </h2>
          <p
            style={{
              fontSize: "13px",
              opacity:"0.7"
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
});
