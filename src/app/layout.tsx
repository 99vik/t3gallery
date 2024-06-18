import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import TopNav from "../components/top-nav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "T3 Gallery",
  description: "T3 stack tutorial",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} dark`}>
        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
