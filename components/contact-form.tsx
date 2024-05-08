"use client";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "./ui/button";

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="w-full h-full p-10 bg-contact-form">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  mx-auto  flex flex-col gap-y-2 md:w-10/12 "
      >
        <h1 className="mx-auto text-5xl text-slate-200 mb-20">
          Kontaktirajte nas ovdje!
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
          <div className="md:space-y-2 mb-4 flex flex-col  space-y-3">
            <label className="text-white" htmlFor="name">
              Korisničko ime
            </label>
            <input
              type="text"
              className="w-full h-[50px] pl-4 rounded-xl"
              placeholder="Korisničko ime"
              {...register("name", {
                required: "Ime ne smije biti prazno",
                minLength: {
                  value: 8,
                  message: "Ime mora imati barem 8 znakova",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500">{`${errors.name.message}`}</p>
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
            <div className="md:space-y-2 mb-4 flex flex-col  space-y-3">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email ne smije biti prazan",
                })}
                className="lg:w-full h-[50px] pl-4 rounded-xl"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
          <div className="md:space-y-2 mb-4 flex flex-col md:w-5/12 flex-1 space-y-3">
            <label className="text-white" htmlFor="subject">
              Tema
            </label>
            <input
              type="text"
              {...register("subject", {
                required: "Tema ne smije biti prazna",
              })}
              className="lg:w-full h-[50px] pl-4 rounded-xl"
              placeholder="Tema"
            />
            {errors.subject && (
              <p className="text-red-500">{`${errors.subject.message}`}</p>
            )}
          </div>
          <div className="md:space-y-2 w-8/12 mb-4 flex flex-col space-y-3">
            <label className="text-white" htmlFor="message">
              Upit
            </label>
            <textarea
              {...register("message", {
                required: "Poruka ne smije biti prazna",
              })}
              className="w-full h-[200px] pl-4 resize-none pt-3 rounded-xl"
              placeholder="Upit"
            />
            {errors.message && (
              <p className="text-red-500">{`${errors.message.message}`}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="secondary"
            className="w-[100px] rounded-3xl"
          >
            Pošalji
          </Button>
        </div>
      </form>
    </div>
  );
}
