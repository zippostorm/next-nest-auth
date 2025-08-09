import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "@/shared/styles/globals.css";
import { MainProvider } from "@/shared/providers/MainProvider";
import { ModeToggle } from "@/shared/components/ui/ToggleTheme";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "Fullstack",
    template: "%s | Fullstack",
  },
  description: "This is a fullstack app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-sans`}
      >
        <MainProvider>
          <div className="relative flex min-h-screen flex-col">
            <ModeToggle />
            <div className="flex h-screen w-full items-center justify-center px-4">
              {children}
            </div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
