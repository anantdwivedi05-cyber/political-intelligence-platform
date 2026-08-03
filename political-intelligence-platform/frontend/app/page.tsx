export default function HomePage() {
  return (
    <main className="container">
      <h1>Political Intelligence Platform</h1>
      <p>Know your leader through publicly available information.</p>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter politician name..."
        />
        <button>Analyze</button>
      </div>

      <section className="features">
        <div>👤 Basic Profile</div>
        <div>⚖ Criminal Cases</div>
        <div>💰 Assets</div>
        <div>🗳 Election History</div>
        <div>🔄 Party Changes</div>
        <div>🤖 AI Summary</div>
      </section>
    </main>
  );
}
