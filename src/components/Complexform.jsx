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
    alert("Form submitted succesfullly.")
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />

      <label>Bio:</label>
      <textarea name="bio" value={formData.bio} onChange={handleChange} />

      <label>Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplexForm;
