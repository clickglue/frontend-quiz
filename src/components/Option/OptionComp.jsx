import styles from "./OptionComp.module.css";
import { useState, useEffect } from "react";

function OptionComp({ option, id, onclick, selected }) {

  function convert() {
    return String.fromCharCode(id + 65);
  }
  function handleClick() {
    onclick(id);
  }

  function getClassOptionContainer() {
    switch (status) {
      case "selected":
        return `${styles.optionContainer} ${styles.selectedBorder}`;
      case "wrong":
        return `${styles.optionContainer} ${styles.selectedBorder}`;
      case "correct-selected":
        return `${styles.optionContainer} ${styles.selectedBorder}`;
      case "correct-not-selected":
        return `${styles.optionContainer} ${styles.selectedBorder}`;
      default:
        return styles.optionContainer;
    }
  }

  function getClass(baseClass, conditionClass) {
    return `${baseClass} ${selected ? conditionClass : ""}`;
  }

  return (
    <button className={getClassOptionContainer()} onClick={handleClick}>
      <div
        className={getClass(styles.letterBackground, styles.selectedBackground)}
      >
        <p className={getClass(styles.letter, styles.selectedLetter)}>
          {convert()}
        </p>
      </div>
      <p className={styles.optionText}>{option}</p>
      <img src="./assets/images/icon-correct.svg" alt="Correct!" />
    </button>
  );
}

export default OptionComp;
