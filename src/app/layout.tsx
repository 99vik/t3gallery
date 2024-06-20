import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "~/app/api/uploadthing/core";

import { Inter } from "next/font/google";
import TopNav from "../components/top-nav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "T3 Gallery",
  description: "T3 stack tutorial",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.className} dark`}>
        <body>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <TopNav />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
