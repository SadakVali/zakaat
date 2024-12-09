import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import MobileNavbar from "@/components/MobileNavbar";
import VerifierLeftSidebar from "@/components/dashboard/verifier-left-sidebar";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zakaat",
  description:
    "Zakaat distribution web app for deserving, verified poor individuals in your locality and among relatives who can't directly ask for help due to dignity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          dm_sans.className,
          "antialiased flex text-blue-50 max-w-[1280px] min-h-screen mx-auto xs:px-4 overflow-x-hidden"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <VerifierLeftSidebar />
          <div className="grow">
            {children}
            <MobileNavbar />
          </div>
          {/* <RightSidebar /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}