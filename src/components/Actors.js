import React from "react";
import { actors } from "../data";
import Actor from "./Actor";

function Actors() {

  return ( 
    <div>
      <h1>Actors Page</h1>
      <ul>{actors.map((actor) => <Actor key={actor.name} actor={actor} />)}</ul>
    </div>
  )
}

export default Actors;
