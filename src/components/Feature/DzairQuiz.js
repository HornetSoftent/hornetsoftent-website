"use client";
import React, { useEffect, useState } from "react";
import dzairquiz from "@/assets/phone/dzairquiz.png";
import Image from "next/image";

const ScrollSection = () => {
  const [show, setShow] = useState(1);

  const toggle = (index) => {
    setShow(index);
  };

  return (
    <section className="container-dzair">
    <h1 className="feature-title">Découvrez l'expérience Dzair Quiz</h1>
      <div className={show === 1 ? "contents content-active" : "contents"}>
        <div className="content">
          <div className="title">
            <div className="nb">
              <div className="nbr">1</div>
            </div>
            <h1>Voyagez dans le temps avec Dzair Quiz</h1>
          </div>
          <div className="info">
            <br />
            <p>
              Découvrez votre savoir sur l'histoire de l’Algérie avec notre tout
              nouveau quizz prochainement disponible sur les plateformes Android
              et iOS.
            </p>
            <br />
            <p>
              Mettez vos connaissances à l'épreuve avec des questions sur des
              événements historiques importants, des personnages célèbres et des
              périodes clés. Améliorez vos compétences en histoire tout en vous
              amusant grâce à des questions amusantes et interactives.
            </p>
          </div>
        </div>
        <div className="phone">
          <Image src={dzairquiz} alt="dzair quiz" />
        </div>
        <div className="content ">
          <div className="container-2">
            <div className="title-2">
              <div className="nb">
                <div className="nbr">2</div>
              </div>
            </div>
            <div className="info-2">
              <p>
                Mettez vos connaissances à l'épreuve avec des questions sur des
                événements historiques importants, des personnages célèbres et
                des périodes clés. Améliorez vos compétences en histoire tout en
                vous amusant grâce à des questions amusantes et interactives.
              </p>
            </div>
            <div className="hr" />
          </div>
        </div>
      </div>
      <div className={show === 2 ? "contents content-active" : "contents"}>
        <div className="content">
          <div className="container-4">
            <div className="title title-4">
              <div className="nb">
                <div className="nbr">4</div>
              </div>
            </div>
            <div className="info">
              <br />
              <p>
                Découvrez votre savoir sur l'histoire de l’Algérie avec notre
                tout nouveau quizz prochainement disponible sur les plateformes
                Android et iOS.
              </p>
              <br />
              <p>
                Mettez vos connaissances à l'épreuve avec des questions sur des
                événements historiques importants, des personnages célèbres et
                des périodes clés. Améliorez vos compétences en histoire tout en
                vous amusant grâce à des questions amusantes et interactives.
              </p>
            </div>
            <div className="hr" />
          </div>
        </div>

        <div className="phone">
          <Image src={dzairquiz} alt="dzair quiz" />
        </div>
        <div className="content content-3">
          <div className="container-3">
            <div className="title-2">
              <div className="nb">
                <div className="nbr">3</div>
              </div>
            </div>
            <div className="info-2">
              <p>
                Mettez vos connaissances à l'épreuve avec des questions sur des
                événements historiques importants, des personnages célèbres et
                des périodes clés. Améliorez vos compétences en histoire tout en
                vous amusant grâce à des questions amusantes et interactives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-tabs">
        <div className="container-ellipse">
          <div
            onClick={() => toggle(1)}
            className={show === 1 ? "ellipse active-tab" : "ellipse"}
          />
        </div>
        <div className="container-ellipse">
          <div
            onClick={() => toggle(2)}
            className={show === 2 ? "ellipse active-tab" : "ellipse"}
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
