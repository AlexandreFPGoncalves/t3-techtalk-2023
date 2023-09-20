import Image from "next/image";
import { type Path } from "@/utils/types";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import { signIn, signOut, useSession } from "next-auth/react";
import { images } from "@/assets";
import { Button } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { OpenIcon, CloseIcon } from "./index";

export const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const { data: sessionData } = useSession();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navbarPaths: Path[] = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Tools", href: "/tools" },
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 z-20 mx-auto hidden w-screen justify-between p-4 shadow-navbar backdrop-blur-sm md:flex">
        <Link href="/" className="flex items-center gap-6">
          <Image
            src={images.itsectorTemporaryLogo}
            width={32}
            height={32}
            alt="ShinyDexTracker"
          />
          <span className="text-2xl font-bold text-white">
            T3
            <span className="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text italic text-transparent">
              {" "}
              TechTalk
            </span>
          </span>
        </Link>

        {/* Links */}
        <div
          className="hidden w-full translate-x-[-3rem] items-center gap-4 md:order-1 md:flex md:w-auto"
          id="nav"
        >
          {navbarPaths.map((path, i) => (
            <Link
              key={i}
              href={path.href}
              className={clsx(
                "font-semibold transition-colors md:bg-transparent",
                pathname === path.href
                  ? "text-accent-500 hover:text-accent-400"
                  : "text-grey hover:text-accent-400",
              )}
              aria-current="page"
            >
              {path.name}
            </Link>
          ))}
        </div>

        {/* Login*/}
        <div className="flex md:order-2">
          <Button
            label={sessionData ? "Sign out" : "Sign in"}
            onClick={
              sessionData ? () => void signOut() : () => void signIn("google")
            }
          />
          {sessionData && (
            <Image
              src={sessionData?.user?.image ?? ""}
              alt="trainer profile picture"
              width={44}
              height={44}
              className="hidden rounded-full md:flex"
            />
          )}
        </div>
      </nav>
      {/* Mobile */}
      <nav className="fixed left-0 top-0 z-20 mx-auto flex w-screen flex-col justify-between p-4 shadow-navbar backdrop-blur-sm md:hidden">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center gap-6">
            <Image
              src={images.itsectorTemporaryLogo}
              width={32}
              height={32}
              alt="ItSector"
            />
            <span className="text-2xl font-bold text-white">
              T3
              <span className="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text italic text-transparent">
                {" "}
                TechTalk
              </span>
            </span>
          </Link>
          <button
            className="text-white"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? <CloseIcon /> : <OpenIcon />}
          </button>
        </div>
        {isMobileNavOpen && (
          <div
            className="flex w-full flex-col items-center gap-4 py-2"
            id="nav"
          >
            {navbarPaths.map((path, i) => (
              <Link
                key={i}
                href={path.href}
                className={clsx(
                  "font-semibold transition-colors md:bg-transparent",
                  pathname === path.href
                    ? "text-accent-500 hover:text-accent-400"
                    : "text-grey hover:text-accent-400",
                )}
                aria-current="page"
              >
                {path.name}
              </Link>
            ))}
            <div className="flex md:order-2">
              <Button
                label={sessionData ? "Sign out" : "Sign in"}
                onClick={
                  sessionData
                    ? () => void signOut()
                    : () => void signIn("google")
                }
              />
              {sessionData && (
                <Image
                  src={sessionData?.user?.image ?? ""}
                  alt="trainer profile picture"
                  width={44}
                  height={44}
                  className="hidden rounded-full md:flex"
                />
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
