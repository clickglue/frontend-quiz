import styles from "./OptionComp.module.css";

function OptionComp({ option }) {
    console.log(option)
  return (
      <button className={styles.optionContainer}>
        <p>{option}</p>
      </button>
  );
}

export default OptionComp;
