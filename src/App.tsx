import LearningEntry from "./components/LearningEntry";

function App() {
  const studentName: string = "Joakimjk";

  return (
    <main>
      <h1>My Learning</h1>
      <p>Fullstack Project</p>
      <p>Student: {studentName}</p>
      <LearningEntry
  topic="React Components"
  date="2026-10-19"
  learned="Components help divide the UI into reusable parts."
  confidence={3}
  category="Frontend"
/>
<LearningEntry
  topic="TypeScript Basics"
  date="2026-10-20"
  learned="TypeScript checks types before the code runs."
  confidence={4}
  category="Programming"
/>
    </main>
  );
}

export default App;