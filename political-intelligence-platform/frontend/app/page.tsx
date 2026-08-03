import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          textAlign: "center",
          paddingTop: "80px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "54px",
            marginBottom: "10px",
          }}
        >
          Political Intelligence Platform
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
          }}
        >
          Know Your Leader Through Public Information
        </p>

        <SearchBox />

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div>⚖ Criminal Cases</div>

          <div>💰 Assets</div>

          <div>🗳 Election History</div>

          <div>🏛 Political Party</div>

          <div>📊 AI Summary</div>

          <div>📰 Latest News</div>
        </div>
      </main>
    </>
  );
}
