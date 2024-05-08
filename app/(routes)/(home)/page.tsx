"use client";

import CustomerStatements from "@/components/caraseul-content";
import Cars from "@/components/layout/home/cars";
import Hero from "@/components/layout/home/hero";
import Navbar from "@/components/layout/main-layout/navbar";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Navbar />
      <Hero title="Garage Simulator" />
      <div className="mx-auto max-w-7xl">
        <Cars />
        <section>
          {" "}
          <CustomerStatements />
        </section>
      </div>
    </main>
  );
}
