"use client";

interface DeleteModalProps {
  carId: number;
  onDeleted: (deletedCarId: number) => void;
}

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
import { toast } from "sonner";

export default function DeleteModal({ carId, onDeleted }: DeleteModalProps) {
  const onDelete = async (carId: number) => {
    try {
      await axios.delete("/api/cars", { data: { carId } });
      onDeleted(carId);
      toast.success("Car deleted successfully!");
    } catch (error) {
      toast.error("There was a problem with deleting the car!!");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-white">Delete</AlertDialogTrigger>
        <AlertDialogContent className="bg-white dark:bg-black">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black dark:text-white">
              Are you sure you want to delete the car?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <strong>
                <em>This action cannot be reversed.</em>
              </strong>
              <br></br> This will permanently delete this car and remove it from
              the garage.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className=" bg-black text-white hover:bg-slate-800">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-700 text-white hover:bg-red-500"
              onClick={() => onDelete(carId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
