import { useState } from "react";

function FormWithLoading() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Something went wrong!");

      setMessage("Form submitted successfully!");
    } catch (error) {
      setMessage("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default FormWithLoading;
