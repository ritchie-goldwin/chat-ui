"use client";

import { MoonSVG, SunSVG } from "@/assets/svg";
import useHasMounted from "@/hooks/use-has-mounted";
import { useTheme } from "next-themes";
import React from "react";

function ThemeIcon() {
  const { setTheme, resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "light" ? <SunSVG /> : <MoonSVG />}
    </button>
  );
}

export default ThemeIcon;
