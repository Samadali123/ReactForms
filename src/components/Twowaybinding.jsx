import { useState } from "react";

function TwoWayBinding() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <p>Preview: {message}</p>
    </div>
  );
}

export default TwoWayBinding;
