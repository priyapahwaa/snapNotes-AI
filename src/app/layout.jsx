import "./globals.css";
import { Outfit } from "next/font/google";
import Provider from "./provider";
import { neobrutalism } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Snap Notes",
  description: "Smart PDF Analysis with AI",
};
const outfit = Outfit({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en">
        <body className={outfit.className}>
          <Provider>{children}</Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
