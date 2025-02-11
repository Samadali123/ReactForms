import { useForm } from "react-hook-form";

function FormWithAPI2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      console.log("Form submitted successfully!");
      console.log(data)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email", { required: "Email is required" })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithAPI2;
