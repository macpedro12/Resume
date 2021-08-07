import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";

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
                  <Link href="/habilities">
                    <p>Habilidades</p>
                  </Link>
                </li>
              ) : null}
              {id != 2 ? (
                <li>
                  <Link href="/jobs">
                    <p>Experiência</p>
                  </Link>
                </li>
              ) : null}
              {id != 3 ? (
                <li >
                  <Link href="/contact">
                    <p>Contato</p>
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
