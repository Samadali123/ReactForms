import { useState } from "react";

function ComplexForm() {
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    gender: "male",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully.");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
      <label style={{ fontWeight: 'bold' }}>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

      <label style={{ fontWeight: 'bold' }}>Bio:</label>
      <textarea name="bio" value={formData.bio} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

      <label style={{ fontWeight: 'bold' }}>Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>Submit</button>
    </form>
  );
}

export default ComplexForm;
