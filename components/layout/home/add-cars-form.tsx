"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "../../ui/button";
import { toast } from "sonner";

interface Car {
  make: string;
  model: string;
  year: string;
  color: string;
  transmission: string;
  kilometers: string;
}

interface AddCarFormProps {
  onCarAdded: (newCar: Car) => void;
}

export default function AddCarsForm({ onCarAdded }: AddCarFormProps) {
  const [formData, setFormData] = useState<Car>({
    make: "",
    model: "",
    year: "",
    color: "",
    transmission: "",
    kilometers: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/cars", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Car added successfully!");
      onCarAdded(response.data);
      setFormData({
        make: "",
        model: "",
        year: "",
        color: "",
        transmission: "",
        kilometers: "",
      });
    } catch (error) {
      toast.error("There was a problem with adding the car.");
    }
  };

  return (
    <div className="mb-5 md:mb-20 mt-20">
      <h1 className="flex justify-center text-4xl ">Create your dream car!</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 space-x-0 md:space-x-8">
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="Make" className="text-black dark:text-white">
              Make
            </label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleChange}
              placeholder="Nissan"
              required
              className="p-4 border-black border dark:border-0 dark:bg-neutral-700 text-black rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="Model" className="dark:text-white">
              Model
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="GT-R"
              required
              className="p-4 border-black border dark:border-0 dark:bg-neutral-700 text-black rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 space-x-0 md:space-x-8">
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="Year" className="dark:text-white">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="2017"
              required
              className="p-4 border-black border dark:border-0 dark:bg-neutral-700 text-black rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="color" className="dark:text-white">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="British Racing Green"
              required
              className="p-4 border-black border dark:border-0 dark:bg-neutral-700 text-black rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="Transmission" className="dark:text-white">
              Transmission
            </label>
            <input
              type="text"
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              placeholder="Automatic"
              required
              className="p-4 border-black border dark:border-0 dark:bg-neutral-700 text-black rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="Kilometers" className="dark:text-white">
              Kilometers (km)
            </label>
            <input
              type="text"
              name="kilometers"
              value={formData.kilometers}
              onChange={handleChange}
              placeholder="34400"
              required
              className="p-4 border-black border dark:border-0 dark:bg-neutral-700 text-black rounded-xl"
            />
          </div>
        </div>
        <div className="flex justify-center items-center py-10">
          <Button
            type="submit"
            className=" bg-blue-600 px-10 flex items-center justify-end hover:bg-blue-400"
          >
            Park it!
          </Button>
        </div>
      </form>
    </div>
  );
}
