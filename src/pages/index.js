import Link from "next/link";
import Image from "next/image";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div className={styles.all}>
      <div className={styles.bg}>
        <img src="/Background.png" className={styles.stretch}/>
      </div>
      <div className={styles.title}>
        <p>
          <span className={styles.differentColor}>&lt;h1&gt;</span>
          Hello World!
          <span className={styles.differentColor}>&lt;/h1&gt;</span>
        </p>
        <h2>Bem vindo ao Meu Currículo</h2>
      </div>
      <div div className={styles.link}>
        <div className={styles.link2}>
          <img src="/yellowPoint.svg" className={styles.yellowPoint} />
          <Link href="/habilities">
            <a>Habilidades</a>
          </Link>
        </div>
        <div className={styles.link2}>
          <img src="/redPoint.svg" />
          <Link href="/">
            <a>Experiência</a>
          </Link>
        </div>
        <div className={styles.link2}>
          <img src="/greenPoint.svg" className={styles.greenPoint} />
          <Link href="/">
            <a>Contato</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
