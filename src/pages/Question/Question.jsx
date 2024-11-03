import styles from './Question.module.css';
import ButtonComp from "../../components/Button/ButtonComp";
import HeaderComp from "../../components/Header/HeaderComp";

function Question({ data, setProgress, icon, bgcolor, topic, qNumber, length }) {
  function handleAnswer() {
    setProgress(true);
  }
  return (
    <div>
      <header>
        <HeaderComp
          icon={icon}
          bgcolor={bgcolor}
          topic={topic}
          theme="dark"
        ></HeaderComp>
      </header>
      <main>
        <section className={styles.question}>
          <span className={styles.progressText}>Question {qNumber} of {length}</span>
          <h2 className={styles.questionText}>{data.question}</h2>
          <span>progress bar comp</span>
          </section>
        <section>
          {data.options[0]}
          {data.options[1]}
          {data.options[2]}
          {data.options[3]}
        </section>
        <section>
          <ButtonComp onclick={handleAnswer} text="Submit Answer" />
        </section>
      </main>
    </div>
  );
}

export default Question;
