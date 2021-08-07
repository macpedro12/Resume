import { useState } from "react";
import styles from "./navbar.module.scss";

export default function NavBar({ id }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.all}>
      <button className={id==3 ?styles.contact : styles.menu} onClick={() => setIsClicked(!isClicked)}>
        <img src="/menu.svg" alt="menu" />
      </button>
      <div>
        {isClicked ? (
          <div className={styles.options}>
            <ul>
              {id != 1 ? (
                <li>
                  <a href="/habilities">
                    <p>Habilidades</p>
                  </a>
                </li>
              ) : null}
              {id != 2 ? (
                <li>
                  <a href="/jobs">
                    <p>Experiência</p>
                  </a>
                </li>
              ) : null}
              {id != 3 ? (
                <li >
                  <a href="/contact">
                    <p>Contato</p>
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
