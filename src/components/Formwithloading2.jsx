import { useForm } from "react-hook-form";
import { useState } from "react";

function FormWithLoading2() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed!");

      setMessage("Form submitted successfully!");
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email", { required: "Email is required" })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default FormWithLoading2;
