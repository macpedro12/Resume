import NavBar from "../components/NavBar/navbar";
import styles from "../styles/contact.module.scss";
const id = 3;

export default function Contact() {
  return (
    <div>
      <NavBar id={id} />

      <div className={styles.all}>
        <div className={styles.title}>
          <h1>Fale Comigo!</h1>
        </div>

        <div className={styles.allInfo}>
          <div className={styles.contactInfo}>
            <div className={styles.info}>
              <h1> E-mail: </h1>
              <p> pedroamorim62@gmail.com </p>
            </div>
            <div className={styles.info}>
              <h1> Telefone: </h1>
              <p> (21) 97939 - 5510 </p>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <h1>Redes Sociais</h1>
            <div className={styles.images}>
              <a target="_blank" href="https://github.com/macpedro12">
                <img src="/github.svg" alt="github" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/pedro.amorim.503092/"
              >
                <img src="/facebook.svg" alt="Facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pedro-amorim-3516001a5/"
              >
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
