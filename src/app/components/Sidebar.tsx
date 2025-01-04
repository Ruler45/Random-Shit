"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import AddButton from "./AddButton";

export default function Sidebar({ random }) {
  console.log(random);
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex top-0 left-0 fixed">
      {!sidebar && (
        <Button
          className="m-4"
          variant={"outline"}
          onClick={() => setSidebar(!sidebar)}
        >
          <Menu />
        </Button>
      )}
      <aside
        className={`h-screen w-[20vw] fixed top-0 left-0 p-4 ${sidebar ? "" : "translate-x-[-100%]"} 
        duration-300 ease-in-out border-r-2 shadow-md backdrop-blur-sm border-gray-200 dark:border-none 
        dark:bg-black flex flex-col gap-4 items-center text-gray-300`}
      >
        <div className="flex w-full justify-between text-2xl ">
          <AddButton />
          <Button variant={"outline"} onClick={() => setSidebar(!sidebar)}>
            <X />
          </Button>
        </div>
        <div className="w-full flex flex-col gap-2 overflow-auto items-center">
          {random.map((item) => {
            return (
              <a
                href={`#${item._id}`}
                key={item._id}
                className=" w-4/5 text-center hover:border border-gray-600 py-2 px-4 rounded-md cursor-pointer text-lg "
              >
                {`${item.title.slice(0, 30)}${item.title.length > 30 ? "..." : ""}`}
              </a>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
