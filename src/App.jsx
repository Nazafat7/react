//import logo from './logo.svg';
import "./App.css";
import UserCard from "./components/UserCard";
import UserSkills from "./components/UserSkills";
import QuoteFetcher from "./components/QuoteFetcher";
function App() {
  const skills = [
    { skill: "React", level: "Advanced" },
    { skill: "JavaScript", level: "Intermediate" },
    { skill: "Node.js", level: "Beginner" },
  ];
  return (
    <div className="App">
      <UserCard />
      {skills.map((s, index) => {
        return <UserSkills key={index} skill={s.skill} level={s.level} />;
      })}
      <QuoteFetcher />
    </div>
  );
}

export default App;
