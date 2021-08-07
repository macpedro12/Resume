import styles from "../styles/jobs.module.scss";
import NavBar from "../components/NavBar/navbar";

export default function Jobs() {
  const id = 2;
  return (
    <div className={styles.all}>
      <div className={styles.navbar}>
        <NavBar id={id} />
      </div>
      <div className={styles.info}>
        <h1> MRO Logistics </h1>
        <p> 08/2019 - 01/2021</p>
        <p className={styles.job}> Jovem Aprendiz ADM</p>
      </div>
      <div className={styles.activities}>
        <div className={styles.roles}>
          <h1>Atividade Realizada:</h1>
          <p>
            Eu tinha a responsabilidade de dar suporte técnico aos colaboradores
            e reparar qualquer erro nos equipamentos de TI da empresa.
          </p>
        </div>
        <div className={styles.development}>
          <h1>Desenvolvimento:</h1>
          <p>
            Muitas das minhas habilidades foram aperfeiçoadas durante o tempo na
            empresa, mas a maior delas foi a habilidade social. Como eu era mais
            tímido, eu tive que aprender a me comunicar melhor, já que grande
            parte do meu trabalho era ajudar os colabooradores
          </p>
        </div>
      </div>
    </div>
  );
}
