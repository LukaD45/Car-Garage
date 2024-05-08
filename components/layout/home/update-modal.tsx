"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  transmission: string;
  kilometers: number;
}

interface UpdateModalProps {
  carId: number;
  onUpdated: (updatedCarId: number) => void;
}

export default function UpdateModal({ carId, onUpdated }: UpdateModalProps) {
  const [car, setCar] = useState<Car>({
    id: 0,
    make: "",
    model: "",
    year: 2015,
    color: "",
    transmission: "",
    kilometers: 0,
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get("/api/cars/");
        const carData = res.data.find((car: Car) => car.id === carId);
        if (carData) {
          setCar(carData);
        } else {
          console.log("Car ID - " + carId + " - not found.");
        }
      } catch (error) {
        console.log("Error ocurred while fetching car: ", error);
      }
    };

    fetchCar();
  }, [carId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const onUpdate = async (carId: number) => {
    try {
      const updatedCarData = {
        make: car.make,
        model: car.model,
        year: Number(car.year),
        color: car.color,
        transmission: car.transmission,
        kilometers: Number(car.kilometers),
      };

      await axios.patch("/api/cars", { carId, ...updatedCarData });
      toast.success("Cars details successfully updated!");
      onUpdated(carId);
    } catch (error) {
      toast.error("There was a problem while updating the car's data!");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-white">Update</AlertDialogTrigger>
        <AlertDialogContent className="bg-white dark:bg-black flex flex-col items-center w-[90%] md:w-full  justify-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="my-6 text-black dark:text-white text-center">
              What would you like to change?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="mb-6">
                <form className="space-y-4 text-white">
                  <div className=" w-[95%] flex flex-col md:flex-row justify-start items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col flex-1 space-y-3">
                      <label
                        htmlFor="make"
                        className="text-black dark:text-white"
                      >
                        Make
                      </label>
                      <input
                        type="text"
                        name="make"
                        value={car.make}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-black border dark:border-0 dark:bg-slate-800 text-black dark:text-white p-4"
                      />
                    </div>
                    <div className="flex flex-col flex-1 space-y-3">
                      <label
                        htmlFor="model"
                        className="text-black dark:text-white"
                      >
                        Model
                      </label>
                      <input
                        type="text"
                        name="model"
                        value={car.model}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-black border dark:border-0 dark:bg-slate-800 text-black dark:text-white p-4"
                      />
                    </div>
                  </div>
                  <div className=" w-[95%] flex flex-col md:flex-row justify-start items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col flex-1 space-y-3">
                      <label
                        htmlFor="year"
                        className="text-black dark:text-white"
                      >
                        Year
                      </label>
                      <input
                        type="number"
                        name="year"
                        value={car.year}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-black border dark:border-0 dark:bg-slate-800 text-black dark:text-white p-4"
                      />
                    </div>
                    <div className="flex flex-col flex-1 space-y-3">
                      <label
                        htmlFor="color"
                        className="text-black dark:text-white"
                      >
                        Color
                      </label>
                      <input
                        type="text"
                        name="color"
                        value={car.color}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-black border dark:border-0 dark:bg-slate-800 text-black dark:text-white p-4"
                      />
                    </div>
                  </div>
                  <div className=" w-[95%] flex flex-col md:flex-row justify-start items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col flex-1 space-y-3">
                      <label
                        htmlFor="transmission"
                        className="text-black dark:text-white"
                      >
                        Transmission
                      </label>
                      <input
                        type="text"
                        name="transmission"
                        value={car.transmission}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-black border dark:border-0 dark:bg-slate-800 text-black dark:text-white p-4"
                      />
                    </div>
                    <div className="flex flex-col flex-1 space-y-3">
                      <label
                        htmlFor="kilometers"
                        className="text-black dark:text-white"
                      >
                        Kilometers (km)
                      </label>
                      <input
                        type="number"
                        name="kilometers"
                        value={car.kilometers}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-black border dark:border-0 dark:bg-slate-800 text-black dark:text-white p-4"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="w-full">
            <AlertDialogCancel className="bg-black text-white hover:bg-slate-800 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-400"
              onClick={() => onUpdate(carId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
