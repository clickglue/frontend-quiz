import { useState } from "react";
import Start from "./pages/start";
import Question from "./pages/Question";
import "./App.css";
import data from "../data.json/";

function App() {
  const [stage, setStage] = useState(0);
  const [category, setCategory] = useState("");
  const [length, setLength] = useState(1);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);

  function setCategory_(category) {
    setCategory(category);
    setStage(1);
    const set = data.quizzes.find((quiz) => quiz.title === category);
    setLength(set.questions.length);
    console.log(`category set to ${category}`);
  }

  function setProgress_(solution) {
    if (solution) {
      setScore((prevScore) => prevScore + 1);
    }
    setProgress((prevProgress) => prevProgress + 1);
    if (progress == length - 1) {
      console.log("done");
      setStage(2);
    }
  }
  function getQuestion() {
    const set = data.quizzes.find((quiz) => quiz.title === category);
    return set.questions[progress];
  }

  switch (stage) {
    case 0:
      return (
        <main>
          <Start data={data} setCategory={setCategory_}></Start>
        </main>
      );
      break;
    case 1:
      return (
        <main>
          <Question data={getQuestion()} setProgress={setProgress_}></Question>
        </main>
      );
      break;
    case 2:
      return (
        <main>
          <div>Score: {score}</div>
        </main>
      );
      break;
    default:
      return (
        <main>
          <Start setCategory={setCategory_}></Start>
        </main>
      );
      break;
  }
}

export default App;
