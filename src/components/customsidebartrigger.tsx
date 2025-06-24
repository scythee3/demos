"use client";
import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";

export default function CustomSidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (    <button onClick={toggleSidebar} aria-label="Open sidebar">
      <Image 
        src="/demos_logo.svg" 
        alt="Open sidebar" 
        width={32} 
        height={32} 
        className="dark:invert"
      />
    </button>
  );
}