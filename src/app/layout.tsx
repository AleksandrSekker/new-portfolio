import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { user } from "@/constants/general";
import { ModalProvider } from "@/context/ModalContext/ModalContext";
import { StepProvider } from "@/context/StepProvider/StepProvider";
import {Header, LayoutComponent} from "@/components";
import { SidebarProvider } from "@/context/SidebarContext/SidebarContext";

const inter = Inter({  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oleksandr Sekker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col justify-between">
          <Head>
            <title>{user.lastName}</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <ModalProvider>
            <StepProvider>
              <SidebarProvider>
                <Header />
                <LayoutComponent>
                  {children}
                </LayoutComponent>

                <div></div>
              </SidebarProvider>
            </StepProvider>
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
