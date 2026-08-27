"use client";

import type { ReactNode } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <div className="grain" />
      {children}
    </>
  );
}
