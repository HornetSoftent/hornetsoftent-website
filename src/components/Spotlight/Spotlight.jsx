import React from "react";
import { FaPlay } from "react-icons/fa6";
import logo from "../../assets/logo/games/outwyasLabyrinth/aporia.png"
import game from "../../assets/logo/games/outwyasLabyrinth/game.png"

export default function Spotlight() {
  return (
    <div id="spotlight">
      <div className="tilte-game">
        <img src={logo.src} alt=""/>
      </div>
      <div className="container-spotlight">
        <div className="video-Thumb">
          <div className="thum-img">
            {/* <img src={game.src} alt="" /> */}
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XVl3mREuNKs?si=r-BhBWBdjjHpwA8r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
       
          <div className="hr" />
        </div>
        <div className="container-game-desc">
        <div className="game-desc">
           <h2>
            Enter the labyrinth.
            <br />
            Find the <span>golden key</span>.
          </h2>
          <p>
            A dungeon with treacherous corridors, riddled with traps and
            relentless monsters. Two keys separate you from the exit.
          
       
          </p><br/>
          <p>Time has already begun... and it won't stop.</p>
        </div>
         

          <div className="container-buttons-cta">
       <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hornetsoftent.aporia" className="CTA">{/* <FaPlay className="FaPlay"/> */}Download on Android</a>
       <a target="_blank" href="https://apps.apple.com/fr/app/aporia-into-the-dark/id6776793051" className="CTA">{/* <FaPlay className="FaPlay"/> */}Download on iOS</a>
        
        </div>
        </div>
        
       
      </div>
      
    </div>
  );
}
