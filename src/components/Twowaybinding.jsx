import { useState } from "react";

function TwoWayBinding() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <textarea 
        style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type your message here..."
      />
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Preview: {message}</p>
    </div>
  );
}

export default TwoWayBinding;
