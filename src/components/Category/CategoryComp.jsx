import styles from "./CategoryComp.module.css";

function CategoryComp({ title, icon, bgcolor, setCategory }) {
  function onclickHandler() {
    setCategory(title);
  }

  return (
    <div>
      <button className={styles.container} onClick={onclickHandler}>
        <div className={styles.image__container} style={{ backgroundColor: bgcolor }}>
          <img src={icon} alt={`Icon ${title}`} />
        </div>
        <p className={styles.title}>{title}</p>
      </button>
    </div>
  );
}
export default CategoryComp;
