import { useUser } from "@clerk/nextjs";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import UpdateModal from "@/components/layout/home/update-modal";
import DeleteModal from "@/components/layout/home/delete-modal";
import { ArrowUpDown } from "lucide-react";

export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  transmission: string;
  kilometers: number;
  createdAt: Date;
  ownerId?: string;
};

export const columns = (
  handleUpdateCar: () => Promise<void>,
  handleDeleteCar: (carId: number) => void
): ColumnDef<Car>[] => [
  {
    accessorKey: "make",
    header: "Make",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "transmission",
    header: "Transmission",
  },
  {
    accessorKey: "kilometers",
    header: "Kilometers",
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Added
          <ArrowUpDown className="ml-4 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="ml-4">
          {new Date(row.original.createdAt).toLocaleDateString("en-GB")}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const car = row.original;
      const { user } = useUser();

      if (user && car.ownerId === user.id) {
        return (
          <div className="flex space-x-4 ">
            <Button className=" bg-blue-500">
              <UpdateModal carId={car.id} onUpdated={handleUpdateCar} />
            </Button>
            <Button className=" bg-red-500">
              <DeleteModal carId={car.id} onDeleted={handleDeleteCar} />
            </Button>
          </div>
        );
      }
    },
  },
];

export default columns;
