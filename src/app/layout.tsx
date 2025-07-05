"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomSidebarTrigger from "@/components/customsidebartrigger";
import { AppSidebar } from "../components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { AgentProvider } from "@trust0/identus-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AgentProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex h-screen">
              <SidebarProvider>
                <AppSidebar />
                <div className="flex flex-col flex-1">
                  {/* Header with mode toggle in top right */}
                  <header className="flex justify-between items-center p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <CustomSidebarTrigger />
                    <ModeToggle />
                  </header>
                  {/* Main content area */}
                  <main className="flex-1 overflow-auto">{children}</main>
                </div>
              </SidebarProvider>
            </div>
          </ThemeProvider>
        </AgentProvider>
      </body>
    </html>
  );
}
