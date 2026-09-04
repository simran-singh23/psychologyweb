import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindScribe | Psychology & Counselling",
  description: "A calm, confidential space for psychological support and self-understanding.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
