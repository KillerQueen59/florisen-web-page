"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div
          style={{
            background: "#E8F7FF",
          }}
        >
          <div className=" bg-[url('/cloudy-header.svg')] h-[200px]">
            <div className="flex p-8">
              <div className="flex w-3/12">
                <Image
                  src="/logo-florisen.svg"
                  alt="logo-florisen"
                  width={80}
                  height={80}
                />
                <div
                  className="text-4xl my-auto mx-4 font-bold"
                  style={{
                    color: "#074E6A",
                  }}
                >
                  Florisen
                </div>
              </div>
              <div className="w-2/12" />
              <div
                className="w-7/12 grid gap-x-8 gap-y-4 grid-cols-6 my-auto text-lg font-semibold"
                style={{
                  color: "#0C5093",
                }}
              >
                <Link
                  href="/home"
                  className={`cursor-pointer ${
                    pathname === "/home"
                      ? "text-black underline underline-offset-8 decoration-2"
                      : ""
                  } hover:text-black hover:underline hover:underline-offset-8 hover:decoration-2`}
                >
                  Home
                </Link>
                <Link
                  href="/floprofile"
                  className={`cursor-pointer ${
                    pathname === "/floprofile"
                      ? "text-black underline underline-offset-8 decoration-2"
                      : ""
                  } hover:text-black hover:underline hover:underline-offset-8 hover:decoration-2`}
                >
                  FloProfile
                </Link>
                <div className="cursor-pointer hover:text-black hover:underline hover:underline-offset-8 hover:decoration-2">
                  FloMagz
                </div>
                <div className="cursor-pointer hover:text-black hover:underline hover:underline-offset-8 hover:decoration-2">
                  FloSchedule
                </div>
                <div className="cursor-pointer hover:text-black hover:underline hover:underline-offset-8 hover:decoration-2">
                  FloGallery
                </div>
                <div className="cursor-pointer hover:text-black hover:underline hover:underline-offset-8 hover:decoration-2">
                  About Us
                </div>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
