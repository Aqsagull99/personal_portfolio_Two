"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [projects, setProjects] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then(res => res.json())
      .then(data => setProjects(data.projects));
  }, []);

  return (
    <div>
      <h1>🚀 My Projects</h1>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}




