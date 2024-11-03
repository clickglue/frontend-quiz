import styles from "./Question.module.css";
import ButtonComp from "../../components/Button/ButtonComp";
import HeaderComp from "../../components/Header/HeaderComp";
import ProgressBarComp from "../../components/ProgressBar/ProgressBarComp";
import OptionComp from "../../components/Option/OptionComp";

function Question({
  data,
  setProgress,
  icon,
  bgcolor,
  topic,
  qNumber,
  length,
}) {
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
          <span className={styles.progressText}>
            Question {qNumber} of {length}
          </span>
          <h2 className={styles.questionText}>{data.question}</h2>
          <span>
            <ProgressBarComp length={length} progress={qNumber} />
          </span>
        </section>
        <section>
          {data.options.map((item) => {
            <OptionComp option={item}></OptionComp>;
          })}
        </section>
        <section>
          <ButtonComp onclick={handleAnswer} text="Submit Answer" />
        </section>
      </main>
    </div>
  );
}

export default Question;
