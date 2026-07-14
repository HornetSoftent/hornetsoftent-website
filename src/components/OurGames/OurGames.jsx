"use client";
import React, {useEffect, useState} from "react";
import axios from "axios";
import DzairQuiz from "@/assets/app/DzairQuiz.png";
import TifinaghIgnite from "@/assets/app/TifinaghIgnite.png";
import aporiaCard  from "@/assets/logo/games/outwyasLabyrinth/bg/aporia-card.png"
import Image from "next/image";
import { URL } from "../Config/Config";

const OurGames = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchApps = async () => {
      try {
        const response = await axios.get(`${URL}/api/apps`);
        setApps(response.data);
      } catch (error) {
        console.error("Error fetching apps:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  },[])
  console.log(loading ? "" :apps.sort((a,b)=> b.id - a.id));
const formattedLink =(str)=>{
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(" ","").toLowerCase();
}
  return (
    <section id="Games">
      <div className="container-game">
      <div className="title-app">
          <h1>Our Games</h1>
        </div>
        <div className="container-card-game">
        {/*   {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            apps.sort((a, b) => b.id - a.id).map((app) => (
              <div className="card-game" key={app.id}>
                <a href={`apps/${formattedLink(app.appName)}`} className="app-link">
                  <img src={app.img} alt={app.appName} />
                </a>
              </div>
            ))
          )} */}
           <div className="card-game">
          <a href="#spotlight"><Image src={aporiaCard} alt="aporia" /></a>
            
          </div>
         {/*  <div className="card-game">
          <a href=""><Image src={TifinaghIgnite} alt="" /></a>
            
          </div>
          <div className="card-game">
          <a href=""><Image src={TifinaghIgnite} alt="" /></a>
            
          </div>  */}
        </div>
        
        
      </div>
    </section>
  );
};

export default OurGames;
