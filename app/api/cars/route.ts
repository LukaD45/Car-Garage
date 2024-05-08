import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const car = await db.car.findMany();

    return NextResponse.json(car);
  } catch (error) {
    console.log("Car GET Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { make, model, year, color, transmission, kilometers } =
      await req.json();

    const newCar = await db.car.create({
      data: {
        make,
        model,
        year: parseInt(year),
        color,
        transmission,
        kilometers: parseInt(kilometers),
        ownerId: userId,
      },
    });

    return NextResponse.json(newCar);
  } catch (error) {
    console.error("Car POST Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { userId } = auth();
    const { carId, ...updatedData } = await req.json();
    const car = await db.car.findUnique({
      where: {
        id: carId,
      },
    });

    if (!car || car.ownerId !== userId) {
      return new NextResponse("Car not found", { status: 403 });
    }

    const updatedCar = await db.car.update({
      where: {
        id: carId,
      },
      data: updatedData,
    });

    return NextResponse.json(updatedCar);
  } catch (error) {
    console.error("Car PATCH Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { userId } = auth();
    const { carId } = await req.json();
    const car = await db.car.findUnique({
      where: {
        id: carId,
      },
    });

    if (!car || car.ownerId !== userId) {
      return new NextResponse("Car not found or unauthorized", { status: 403 });
    }

    await db.car.delete({
      where: {
        id: carId,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    console.log("Car DELETE Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
