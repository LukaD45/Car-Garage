"use client";

import { DataTable } from "./data-table";
import { Car, columns } from "@/app/(routes)/(home)/columns";
import { useEffect, useState } from "react";
import axios from "axios";
import AddCarsForm from "./add-cars-form";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("/api/cars");
        setCars(res.data);
      } catch (error) {
        console.log("Error while fetching cars: ", error);
      }
    };

    fetchCars();
  }, []);

  const handleAddCar = (newCar: Car) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const handleUpdateCar = async () => {
    try {
      const res = await axios.get("/api/cars");
      setCars(res.data);
    } catch (error) {
      console.log("Error while fetching updated cars: ", error);
    }
  };

  const handleDeleteCar = (deletedCarId: number) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== deletedCarId));
  };

  return (
    <div className="mb-10">
      {/* @ts-ignore */}
      <AddCarsForm onCarAdded={handleAddCar} />
      <DataTable
        columns={columns(handleUpdateCar, handleDeleteCar)}
        data={cars}
      />
    </div>
  );
};

export default Cars;
