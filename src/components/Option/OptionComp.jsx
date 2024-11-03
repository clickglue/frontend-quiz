import styles from "./OptionComp.module.css";


function OptionComp({ option, id }) {


  function convert(){
    return String.fromCharCode(id+65)
  }
  function handleClick(event){
    event.currentTarget.classList.toggle(styles.selected);
  }

  return (
      <button className={styles.optionContainer} onClick={handleClick}>
        <div className={styles.letterBackground}>
        <p className={styles.letter}>{convert(id)}</p>
        </div>
        <p className={styles.optionText}>{option}</p>
      </button>
  );
}

export default OptionComp;
