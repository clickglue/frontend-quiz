import styles from "./Question.module.css";
import ButtonComp from "../../components/Button/ButtonComp";
import HeaderComp from "../../components/Header/HeaderComp";
import ProgressBarComp from "../../components/ProgressBar/ProgressBarComp";
import OptionComp from "../../components/Option/OptionComp";

import { useState } from "react";

function Question({
  data,
  setProgress,
  icon,
  bgcolor,
  topic,
  qNumber,
  length,
}) {
  const [selectedOption, setSelectedOption] = useState();

  function handleSubmit() {
    setProgress(true);
    setSelectedOption('');
  }
  function handleAnswer(index) {
    setSelectedOption(index);
  }

  console.log(selectedOption);
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
        <section className={styles.options}>
          {data.options.map((item, index) => (
            <OptionComp
              key={index}
              option={item}
              id={index}
              onclick={handleAnswer}
              selected={index===selectedOption?true:false}
            />
          ))}
        </section>
        <section>
          <ButtonComp onclick={handleSubmit} text="Submit Answer" />
        </section>
      </main>
    </div>
  );
}

export default Question;
