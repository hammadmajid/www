"use client";

import React, { useState } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages: string[] = ["Links", "Projects", "Contact", "About"];
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="absolute -top-24 left-0 p-4 z-40 bg-light-body text-light-text-primary transition-all focus:top-0"
      >
        Skip to content
      </a>
      <header className="relative flex flex-col sm:flex-row justify-between items-center p-4 border-b-2 border-light-border">
        <div className="w-full flex flex-row justify-between items-center">
          <Link href="/" className="text-nowrap block font-medium text-xl">
            Hammad Majid
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="sm:hidden z-50 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`
            fixed inset-0 bg-black/50 z-40
            ${isMenuOpen ? "block" : "hidden"}
            sm:hidden
          `}
          onClick={closeMenu}
        />

        {/* Navigation Menu */}
        <nav
          className={`
            fixed top-0 right-0 w-64 h-full bg-light-body
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            sm:translate-x-0 sm:relative sm:block sm:w-auto sm:h-auto sm:bg-transparent
            z-40 sm:z-auto
            pt-16 sm:pt-0
          `}
        >
          <ul
            className="
              text-center space-y-4
              sm:space-y-0 sm:flex sm:space-x-4
              sm:items-center h-full sm:h-auto
            "
          >
            {pages.map((page: string) => {
              const isActive = pathname === `/${page.toLowerCase()}`;
              return (
                <li key={page} className="sm:inline-block">
                  <Link
                    href={`/${page.toLowerCase()}`}
                    className={`
                      block py-2 sm:py-0
                      hover:text-light-accent
                      focus:outline-none focus:text-light-accent
                      ${isActive ? "text-light-accent" : ""}
                    `}
                    onClick={closeMenu}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
