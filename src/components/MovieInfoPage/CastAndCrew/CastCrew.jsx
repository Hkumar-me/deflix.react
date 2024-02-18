import React from "react";
import "./CastCrew.css";

function CastCrew() {
  const castMembers = [
    {
      name: "Actor 1",
      photo:
        "https://images.unsplash.com/photo-1499470932971-a90681ce8530?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Lead Role",
    },
    {
      name: "Actor 2",
      photo:
        "https://images.unsplash.com/photo-1615212049275-95561aebe1b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Supporting Role",
    },
    {
      name: "Actor 3",
      photo:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Supporting Role",
    },
    {
      name: "Actor 4",
      photo:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Supporting Role",
    },
    {
      name: "Actor 5",
      photo:
        "https://images.unsplash.com/photo-1534008757030-27299c4371b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Supporting Role",
    },
  ];

  return (
    <div className="cast-crew">
      <h1 className="underline-effects">Cast and Crew</h1>
      <div className="castList">
        {castMembers.map((element, index) => {
          return (
            <div key={index} className="cast">
              <img
                src={element.photo}
                alt="castPhoto"
              />
              <div className="castInfo">
                <h2>{element.name}</h2>
                <h3>{element.role}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CastCrew;
