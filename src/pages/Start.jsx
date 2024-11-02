import CategoryComp from "../components/Category/CategoryComp";

function Start({ data, setCategory }) {
  return (
    <main>
      <section>Introduction</section>
      <section>
        {data.quizzes.map((item) => (
          <CategoryComp
            key={item.title}
            title={item.title}
            icon={item.icon}
            setCategory={setCategory}
          ></CategoryComp>
        ))}
      </section>
    </main>
  );
}

export default Start;
