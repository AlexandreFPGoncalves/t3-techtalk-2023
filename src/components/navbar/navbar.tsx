import Image from "next/image";
import { type Path } from "@/utils/types";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import { signIn, signOut, useSession } from "next-auth/react";
import { images } from "@/assets";
import { Button } from "@/components";

export const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const { data: sessionData } = useSession();

  const navbarPaths: Path[] = [
    { name: "Home", href: "/" },
    { name: "About us", href: "./" },
    { name: "Tools", href: "./" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-20 w-full shadow-navbar backdrop-blur-sm">
      <div className="mx-auto flex max-w-screen-xl justify-between p-4">
        <a href="./" className="flex items-center gap-2">
          <Image
            src={images.itsector}
            width={32}
            height={32}
            alt="ShinyDexTracker"
          />
          <span className="text-2xl font-bold text-white">ITSector</span>
        </a>

        {/* Links */}
        <div
          className="hidden w-full translate-x-[-3rem] items-center md:order-1 md:flex md:w-auto"
          id="nav"
        >
          <ul className="flex space-x-8 font-semibold ">
            {navbarPaths.map((path, i) => (
              <li key={i}>
                <a
                  href={path.href}
                  className={clsx(
                    "block transition-colors md:bg-transparent",
                    pathname === path.href
                      ? "text-accent-500 hover:text-accent-400"
                      : "text-grey hover:text-accent-400",
                  )}
                  aria-current="page"
                >
                  {path.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Login and Burger Btn */}
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
              className="ml-4 hidden rounded-full md:flex"
            />
          )}

          <button
            data-collapse-toggle="nav"
            type="button"
            className="text-grey-500 hover:bg-grey-100 focus:ring-grey-200 dark:text-grey-400 dark:hover:bg-grey-700 dark:focus:ring-grey-600 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
            aria-controls="nav"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
