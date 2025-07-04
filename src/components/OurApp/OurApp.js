"use client";
import React, {useEffect, useState} from "react";
import axios from "axios";
import DzairQuiz from "@/assets/app/DzairQuiz.png";
import TifinaghIgnite from "@/assets/app/TifinaghIgnite.png";
import Image from "next/image";

const OurApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchApps = async () => {
      try {
        const response = await axios.get("http://localhost:3050/api/apps");
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
    <section id="App">
      <div className="container-app">
        <div className="container-card-app">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            apps.sort((a, b) => b.id - a.id).map((app) => (
              <div className="card-app" key={app.id}>
                <a href={`apps/${formattedLink(app.appName)}`} className="app-link">
                  <img src={app.img} alt={app.appName} />
                </a>
              </div>
            ))
          )}
          {/* <div className="card-app">
          <a href=""><Image src={DzairQuiz} alt="" /></a>
            
          </div>
          <div className="card-app">
          <a href=""><Image src={TifinaghIgnite} alt="" /></a>
            
          </div>
          <div className="card-app">
          <a href=""><Image src={TifinaghIgnite} alt="" /></a>
            
          </div> */}
        </div>
        
        <div className="title-app">
          <h1>Nos apps</h1>
        </div>
      </div>
    </section>
  );
};

export default OurApp;
