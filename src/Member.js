export function Member({ name, location, isSelected }) {
  return (
    <div
      className="member"
      style={{
        backgroundColor: isSelected ? 'yellow' : 'white', // Highlight selected member
        border: isSelected ? '2px solid green' : '1px solid #ccc'
      }}
    >
      <h2>Member: {name || "Unknown"}</h2>
      <h4>Location: {location || "Unknown"}</h4>
    </div>
  );
}
