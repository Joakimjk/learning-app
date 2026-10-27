import { useState } from "react";
import LearningEntry from "./components/LearningEntry";
import type { LearningEntryData } from "./types/LearningEntryData";

const initialEntries: LearningEntryData[] = [
  {
    id: 1,
    topic: "React Components",
    date: "2026-10-19",
    learned: "Components help divide the UI into reusable parts.",
    confidence: 3,
    category: "Frontend",
  },
  {
    id: 2,
    topic: "TypeScript Basics",
    date: "2026-10-20",
    learned: "TypeScript checks types before the code runs.",
    confidence: 4,
    category: "Programming",
  },
];

function App() {
  const studentName: string = "Joakimjk";
  const [entries, setEntries] = useState<LearningEntryData[]>(initialEntries);

  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [learned, setLearned] = useState("");
  const [confidence, setConfidence] = useState(3);
  const [category, setCategory] = useState("");

    function handleAddEntry() {

    if (topic.trim() === "" || learned.trim() === "") return;
    if (confidence < 1 || confidence > 5) return;

    
    const newEntry: LearningEntryData = {
      id: Date.now(),
      topic: topic.trim(),
      date,
      learned: learned.trim(),
      confidence,
      category: category.trim(),
    };

    
    setEntries((currentEntries) => [...currentEntries, newEntry]);

    
    setTopic("");
    setDate("");
    setLearned("");
    setConfidence(3);
    setCategory("");
  }

  return (
    <main>
      <h1>My Learning</h1>
      <p>Fullstack Project</p>
      <p>Student: {studentName}</p>

            <section>
        <h2>Add entry</h2>

        <div>
          <label htmlFor="topic">Topic</label>
          <input
            id="topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="learned">What I learned</label>
          <textarea
            id="learned"
            value={learned}
            onChange={(event) => setLearned(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confidence">Confidence (1-5)</label>
          <input
            id="confidence"
            type="number"
            min={1}
            max={5}
            value={confidence}
            onChange={(event) => setConfidence(Number(event.target.value))}
          />
        </div>

                <button type="button" onClick={handleAddEntry}>
          Add entry
        </button>

      </section>

      {entries.map((entry) => (
        <LearningEntry key={entry.id} entry={entry} />
      ))}
    </main>
  );
}

export default App;