import styles from "./HeaderComp.module.css";

function HeaderComp({ icon, bgcolor, topic, theme }) {
  function check(){
    return topic ? 'flex' : 'none';
  }
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.topic} style={{display:check()}}>
          <div
            className={styles.image__container}
            style={{ backgroundColor: bgcolor }}
          >
            <img src={icon} alt={`Icon ${topic}`} />
          </div>
          <p className={styles.title}>{topic}</p>
        </span>
      </div>
      <span style={{color:'white'}}>switch</span>
    </div>
  );
}
export default HeaderComp;
