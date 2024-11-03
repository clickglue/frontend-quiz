import styles from "./Start.module.css";
import HeaderComp from "../../components/Header/HeaderComp";
import CategoryComp from "../../components/Category/CategoryComp";
import IntroductionComp from "../../components/Introduction/IntroductionComp";

function Start({ data, setCategory }) {
  return (
    <div className={styles.container}>
      <header>
        <HeaderComp></HeaderComp>
      </header>
      <main>
        <section className={styles.introduction}>
          <IntroductionComp></IntroductionComp>
        </section>
        <section className={styles.items}>
          {data.quizzes.map((item) => (
            <CategoryComp
              key={item.title}
              title={item.title}
              icon={item.icon}
              bgcolor={item.bgcolor}
              setCategory={setCategory}
            ></CategoryComp>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Start;
