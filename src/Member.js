export function Member(props) {
  return (
    <div className="member">
      <h2>Member: {props.name || "Unknown"}</h2>
      <h4>Location: {props.location || "Unknown"}</h4>
    </div>
  );
}
