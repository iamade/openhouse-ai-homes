"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
    {/* system theme is :{systemTheme}
     The current theme is: {currentTheme} */}
{/* 
    The current theme is: {currentTheme} */}
    
      {mounted && (currentTheme === "dark" ? (
      <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('light')} />
      ) : (
        <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('dark')} />
      ))}
    </>
  );
}
