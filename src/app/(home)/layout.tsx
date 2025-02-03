import { ThemeProvider } from "@/components/providers/ThemeProvider";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Layout;
