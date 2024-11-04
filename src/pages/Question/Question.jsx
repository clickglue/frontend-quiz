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
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption]=useState(1);

  function handleSubmit() {
    if (selectedOption===null) {
      document.getElementById("pleaseSubmit").style.display= "flex" ;
    } else {
      
      setProgress(true);
      setSelectedOption(null);
    }
  }
  function handleAnswer(index) {
    document.getElementById("pleaseSubmit").style.display= "none";
    setSelectedOption(index);
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
        <section className={styles.options}>
          {data.options.map((item, index) => (
            <OptionComp
              key={index}
              option={item}
              id={index}
              onclick={handleAnswer}
              selected={index === selectedOption ? true : false}
            />
          ))}
        </section>
        <section>
          <ButtonComp onclick={handleSubmit} text="Submit Answer" />
        </section>
        <section>
          <div id="pleaseSubmit" className={styles.pleaseSubmit}>
            <img src="./assets/images/icon-incorrect.svg" alt="Icon cross" />
            <p className={styles.pleaseSubmit__Text}>Please select an answer</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Question;
