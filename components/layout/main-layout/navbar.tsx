"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => setIsSheetOpen((prev) => !prev);
  const closeSheet = () => setIsSheetOpen(false);
  return (
    <header className="max-w-7xl  mx-auto ">
      <nav className="flex justify-center items-center ">
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="h-20 rounded-md ">
            <Image
              alt="Projekt"
              className="object-cover "
              src="/logo.jpg"
              width={150}
              height={150}
            />
          </div>
          <div className="text-black dark:text-white flex gap-x-10">
            <Link href="/" onClick={closeSheet}>
              Naslovna
            </Link>
            <Link href="/gallery" onClick={closeSheet}>
              Galerija
            </Link>
            <Link href="/contact" onClick={closeSheet}>
              Kontakt
            </Link>
            <Link href="/settings" onClick={closeSheet}>
              Postavke
            </Link>
          </div>
          <div className="flex gap-x-10 items-center">
            <UserButton />
            <ModeToggle />
          </div>
        </div>
        <div className="flex md:hidden justify-around w-full items-center bg-neutral-700 ">
          <div className="h-20 rounded-md ">
            <Image
              alt="Projekt"
              className="object-cover "
              src="/logo.jpg"
              width={135}
              height={20}
            />
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger onClick={toggleSheet}>
              <RxHamburgerMenu
                size={30}
                className="block lg:hidden cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="bg-neutral-700 text-slate-100">
              <SheetHeader>
                <SheetTitle className="text-left text-newWhite/60">
                  Navigacija
                </SheetTitle>
                <SheetDescription>
                  <div className="space-y-10 text-left flex flex-col text-white dark:text-neutral-400 mt-[10%] p-8  text-lg text-newWhite">
                    <Link href="/" onClick={closeSheet}>
                      Naslovna
                    </Link>
                    <Link href="/gallery" onClick={closeSheet}>
                      Galerija
                    </Link>
                    <Link href="/contact" onClick={closeSheet}>
                      Kontakt
                    </Link>
                    <Link href="/settings" onClick={closeSheet}>
                      Postavke
                    </Link>

                    <div className="flex  gap-x-4 md:hidden pt-12 text-black dark:text-white">
                      <Button variant="secondary">
                        <Link href="/contact" onClick={closeSheet}>
                          Kontakt
                        </Link>
                      </Button>
                      <ModeToggle />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
