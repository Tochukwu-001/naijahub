"use client";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  info: string;
};

export default function Post() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", info: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id="name" {...register("name")} />
        <input {...register("info")} type="text" id="info" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
