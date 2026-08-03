"use client";

import { useState } from "react";

export default function SearchBox() {
  const [politicianName, setPoliticianName] = useState("");

  const handleAnalyze = async () => {
    if (politicianName.trim() === "") {
      alert("Please enter a politician name.");
      return;
    }

    alert(`Searching for: ${politicianName}`);

    // Session 6
    // Yahin se backend API call jayegi
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "50px",
      }}
    >
      <input
        type="text"
        value={politicianName}
        onChange={(e) => setPoliticianName(e.target.value)}
        placeholder="Enter politician name..."
        style={{
          width: "450px",
          padding: "16px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid #94a3b8",
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "16px 26px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Analyze
      </button>
    </div>
  );
}
