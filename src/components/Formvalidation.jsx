import { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid Email");
      return;
    }
    setError("");
    alert("Form Submitted");
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
      <label style={{ fontWeight: 'bold', marginBottom: '5px' }} htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      {error && <p style={{ color: 'red', margin: '0' }}>{error}</p>}
      <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>Submit</button>
    </form>
  );
}

export default FormValidation;
