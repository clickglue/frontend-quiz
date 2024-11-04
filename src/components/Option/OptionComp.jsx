import styles from "./OptionComp.module.css";


function OptionComp({ option, id, onclick, selected }) {


  function convert(){
    return String.fromCharCode(id+65)
  }
  function handleClick(){
    onclick(id)
  }

  return (
    <button
    className={`${styles.optionContainer} ${selected ? styles.selected : ""}`}
    onClick={handleClick}
  >
        <div className={styles.letterBackground}>
        <p className={styles.letter}>{convert(id)}</p>
        </div>
        <p className={styles.optionText}>{option}</p>
      </button>
  );
}

export default OptionComp;
