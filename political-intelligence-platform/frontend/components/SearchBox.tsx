export default function SearchBox() {
  return (
    <div
      style={{
        marginTop: "60px",
        display: "flex",
        justifyContent: "center",
        gap: "12px",
      }}
    >
      <input
        type="text"
        placeholder="Search any Indian Politician..."
        style={{
          width: "500px",
          padding: "16px",
          borderRadius: "10px",
          border: "1px solid #475569",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <button
        style={{
          padding: "16px 28px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Analyze
      </button>
    </div>
  );
}
