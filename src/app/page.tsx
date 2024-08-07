import {
  PiAppStoreLogo,
  PiGooglePlayLogo,
  PiGooglePlayLogoBold,
} from "react-icons/pi";
import { AlignRight, BookCheck, BookCheckIcon, MoveRight } from "lucide-react";

import { RxDividerVertical } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

function App() {
  const pColor = "bg-[#1f193f]";
  const sColor = "bg-[#69e797]";
  return (
    <main
      className={` ${pColor} relative overflow-hidden sm:h-[100vh] h-[110vh] text-slate-200 `}
    >
      <div className="dark-color bg-opacity-10"></div>
      <main className="sm:px-[3rem] lg:px-[10rem] px-7  py-3 sm:py-9 flex flex-col  ">
        <header className="App-header z-10">
          <nav className=" flex justify-between items-center">
            <div className="title font-bold text-[2rem]">Pikka.</div>
            <div className="hidden sm:flex gap-2 font-medium">
              <span className="button w-[120px] border border-white border-opacity-70  ">
                Log in
                <BookCheck className="h-[14px] w-[17px]" />
              </span>
              <span className={`button  ${sColor} text-slate-900 `}>
                Get Started <MoveRight className="h-[14px] w-[17px]" />
              </span>
            </div>
            <div className="block sm:hidden">
              <MobileNav />
            </div>
          </nav>
        </header>
        <section className="sm:grid sm:grid-cols-12 mt-9 sm:mt-[5rem]  flex flex-col    z-10">
          <div className="left sm:col-span-7 flex flex-col ">
            <div className="flex  items-center text-[16px]  gap-2 self-center sm:self-start  bg-[#978ae2] w-[300px]  sm:w-[340px]  p-3 sm:p-5  font-medium rounded-full">
              <span className="bg-blue-950 flex rounded-full px-5 py-1">
                New
              </span>
              <p className="font-bold tracking-tight text-slate-100 ">
                Pikka app is under dev
              </p>
            </div>
            <div className="w-full">
              <h1 className="mt-[1.5rem] mb-[1rem] leading-tight text-[36px] sm:text-5xl text-pretty sm:text-left text-center lg:text-[60px] max-w-prose w-full font-bold font-['Noto sans'] ">
                Sell <span className="text-[#69e797]">Bitcoin</span> for Instant{" "}
                <span className="text-[#69e797]">Naira</span>
              </h1>
              <p className="w-full max-w-prose text-center text-pretty mb-[1.5rem] sm:pr-3 text-slate-400 text-sm sm:text-left">
                Pikka App helps users who have bitcoin to Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dolore sit ipsam fuga quis,
                cum nulla cupiditate id qui! Vel, corporis!{" "}
              </p>
            </div>
            <div className=" my-8 gap flex min-[500px]:flex-row flex-col justify-center sm:justify-start items-center gap-2">
              <div
                className={`button sm:w-[150px] w-[200px] lg:w-[200px] text-sm h-[60px]  ${sColor} font-medium text-slate-900 `}
              >
                Get Started <MoveRight className="size-[24px]" />
              </div>{" "}
              <div className="button w-[200px] text-sm  h-[60px] border font-medium text-slate-300 border-opacity-70 border-white">
                <div className="flex gap-0">
                  <span>
                    <PiGooglePlayLogo />
                  </span>
                  <RxDividerVertical className="text-slate-500" />
                  <span>
                    <PiAppStoreLogo />
                  </span>
                </div>
                Download app
              </div>
            </div>
          </div>
          <div className="right  sm:col-span-5 items-center">
            <div className=" flex justify-center w-full sm:mt-[10rem]">
              <Image
                src="/images/mobile.png"
                height={700}
                width={380}
                className="w-full max-w-[380px] object-cover"
                alt="phone"
              />
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}

export default App;

//create a mobile nav using shadcn sheet component and react-icons

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <AlignRight />
        </SheetTrigger>
        <SheetContent className="bg-slate-300">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>{" "}
    </>
  );
};
