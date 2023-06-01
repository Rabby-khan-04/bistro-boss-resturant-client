import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Recipe Name"
        {...register("Recipe Name", { required: true, maxLength: 119 })}
      />
      <select {...register("Category", { required: true })}>
        <option value="Salad, Pizza, Soup, Dessert, Drinks">
          Salad, Pizza, Soup, Dessert, Drinks
        </option>
      </select>
      <textarea {...register("Recipe Details", { required: true })} />

      <input type="submit" />
    </form>
  );
}
