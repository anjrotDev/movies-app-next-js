"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitch = (isSelected: boolean, className: string): ReactNode => {
    if (isSelected) {
      setTheme("light");
      return <SunIcon className={className} />;
    } else {
      setTheme("dark");
      return <MoonIcon className={className} />;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Switch
      defaultSelected={theme === "light" ? true : false}
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) => handleSwitch(isSelected, className)}
    />
  );
};

export default Switcher;
