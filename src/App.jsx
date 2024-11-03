import { useState } from "react";
import Start from "./pages/Start/Start";
import Question from "./pages/Question/Question";
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
    if (progress == length) {
      setStage(2);
    }
  }
  function getQuestion() {
    const set = data.quizzes.find((quiz) => quiz.title === category);
    return set.questions[progress];
  }

  function getIcon(){
    const set = data.quizzes.find((quiz) => quiz.title === category);
    return set.icon;
  }

  function getBgcolor(){
    const set = data.quizzes.find((quiz) => quiz.title === category);
    return set.bgcolor;
  }

  switch (stage) {
    case 0:
      return (
        <main className="main">
          <Start data={data} setCategory={setCategory_}></Start>
        </main>
      );
      break;
    case 1:
      return (
        <main className="main">
          <Question data={getQuestion()} setProgress={setProgress_} icon={getIcon()} bgcolor={getBgcolor()} topic={category} qNumber={progress+1} length={length}></Question>
        </main>
      );
      break;
    case 2:
      return (
        <main className="main">
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
