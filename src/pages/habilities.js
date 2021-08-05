import { useState } from "react";
import styles from "../styles/habilities.module.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const habilidades = [
  {
    id: 1,
    name: "Web Design",
    img: "/web.png",
    skills: ["NextJS/ReactJS", "HTML", "CSS/SASS", "Figma"],
  },
  {
    id: 2,
    name: "Programação",
    img: "/prog.png",
    skills: ["Python", "C++"],
  },
  {
    id: 3,
    name: "Linguagens",
    img: "lingua.png",
    skills: ["Inglês", "Nível : Intermediário"],
  },
  {
    id: 4,
    name: "Escolaridade",
    img: "escola.png",
    skills: ["Faculdade: CEFET-RJ", "Curso: Ciência da Computação"],
  },
];

export default function Habilities() {
  const [index, setIndex] = useState(1);
  const settings = {
    centerPadding: "-15px",
    dots: true,
    infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, prox) => setIndex(prox+1),
  };

  return (
    <div className={styles.all}>
      <div className={styles.select}>
        {habilidades.map((habilidades, idx) => (
          <div
            className={idx == index - 1 ? styles.selectedCard : styles.cards}
            key={habilidades.id}
            onClick={() => setIndex(habilidades.id)}
          >
            <img src={habilidades.img} />
            <p>{habilidades.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.responsiveSelect}>
        <Slider {...settings}>
          {habilidades.map((habilidades) => (
            <div className={styles.card}>
              <img src={habilidades.img}/>
              <p>{habilidades.name}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.skill}>
        <h1> Habilidades: </h1>
        {habilidades.map((habilidades, idx) => (
          <div key={habilidades.id}>
            {idx == index - 1 ? (
              <ul>
                {habilidades.skills.map((skills) => (
                  <li>{skills}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
