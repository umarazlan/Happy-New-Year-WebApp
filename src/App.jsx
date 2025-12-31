import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      confetti({
        particleCount: 1500,
        spread: 120,
        origin: { y: 0.6 },
      });
    }
  }, [submitted]);

  return (
    <div className="container">
      {!submitted ? (
        <form className="card" onSubmit={handleSubmit}>
          <h1>🎉 Welcome 🎉</h1>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Celebrate 🎆</button>
        </form>
      ) : (
        <div className="celebration">
          <h1>🎆 Happy New Year, {name}! 🎆</h1>
        </div>
      )}
    </div>
  );
}
