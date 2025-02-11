import { useForm } from "react-hook-form";

function BasicHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register("name")} placeholder="Enter your name" />

      <label>Email:</label>
      <input type="email" {...register("email")} placeholder="Enter your email" />

      <button type="submit">Submit</button>
      
    </form>
  );
}

export default BasicHookForm;
