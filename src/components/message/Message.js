import React from "react";

function Message() {
    console.log("Message component rendered");
  return (
    <div className="message">
      <p>This is a counter</p>
    </div>
  );
}
export default React.memo(Message);