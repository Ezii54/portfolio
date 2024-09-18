"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function Theme() {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
         setTheme(savedTheme);
         document.documentElement.classList.add(savedTheme);
      }
   }, []);

   const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);

      if (newTheme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   };

   return (
      <label className="relative inline-flex items-center cursor-pointer">
         <input
            type="checkbox"
            className="sr-only"
            checked={theme === "dark"}
            onChange={toggleTheme}
         />
         <div className="flex items-center justify-between h-8 p-1 rounded-full w-14 bg-color-sm dark:bg-color-lg">
            <span className="text-color-white">
               <Moon size={22} weight="light" />
            </span>
            <span className="text-color-black">
               <Sun size={22} weight="light" />
            </span>
            <div
               className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  theme === "dark" ? "translate-x-6" : ""
               }`}
            ></div>
         </div>
      </label>
   );
}
