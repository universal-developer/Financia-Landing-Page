"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  // Updated animation variants for menu items to expand from center
  const itemVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0, // Start with no width
      originX: 0.5, // Set origin to center
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      scaleX: 1, // Expand to full width
      originX: 0.5, // Keep origin at center
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-[#070C14] z-50 transition-all duration-300 ${
        scrolled ? "" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-bold">
              <Image src="/logo.png" alt={"hello"} width={150} height={150} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link
              href="/about"
              className="text-[#828E9D] hover:text-gray-900 relative group"
            >
              Features
              <span
                className="absolute -bottom-1 left-1/2 right-1/2 w-0 h-[0.5] bg-gray-900 
      transition-all duration-300 
      group-hover:left-0 group-hover:right-0 group-hover:w-full"
              ></span>
            </Link>
            <Link
              href="/features"
              className="text-[#828E9D] hover:text-gray-900 relative group"
            >
              Pricing
              <span
                className="absolute -bottom-1 left-1/2 right-1/2 w-0 h-[0.5] bg-gray-900 
      transition-all duration-300 
      group-hover:left-0 group-hover:right-0 group-hover:w-full"
              ></span>
            </Link>
            <Link
              href="/products"
              className="text-[#828E9D] hover:text-gray-900 relative group"
            >
              Blog
              <span
                className="absolute -bottom-1 left-1/2 right-1/2 w-0 h-[0.5] bg-gray-900 
      transition-all duration-300 
      group-hover:left-0 group-hover:right-0 group-hover:w-full"
              ></span>
            </Link>
            <Link
              href="/contact"
              className="text-[#828E9D] hover:text-gray-900 relative group"
            >
              Contact
              <span
                className="absolute -bottom-1 left-1/2 right-1/2ß w-0 h-[0.5] bg-gray-900 
      transition-all duration-300 
      group-hover:left-0 group-hover:right-0 group-hover:w-full"
              ></span>
            </Link>
          </div>

          {/* Buy Now Button - Desktop */}
          <div className="hidden md:block">
            <Button
              href="/buy"
              variant="primary"
              size="lg"
              className="bg-[#22282F] text-[#F2F9FE]"
            >
              Buy now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed md:hidden inset-0 top-20 bg-white z-40 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center justify-center h-full pb-20 px-4 space-y-8">
              <motion.div
                variants={itemVariants}
                className="w-full flex justify-center"
              >
                <Link
                  href="/about"
                  className="text-[#828E9D] hover:text-gray-900 block px-3 py-3 text-2xl font-medium relative group text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                  <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-full flex justify-center"
              >
                <Link
                  href="/features"
                  className="text-[#828E9D] hover:text-gray-900 block px-3 py-3 text-2xl font-medium relative group text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                  <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-full flex justify-center"
              >
                <Link
                  href="/products"
                  className="text-[#828E9D] hover:text-gray-900 block px-3 py-3 text-2xl font-medium relative group text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                  <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-full flex justify-center"
              >
                <Link
                  href="/contact"
                  className="text-[#828E9D] hover:text-gray-900 block px-3 py-3 text-2xl font-medium relative group text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                  <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </motion.div>

              {/* Buy Now Button - Mobile */}
              <motion.div variants={itemVariants} className="mt-6">
                <Button
                  href="/buy"
                  variant="outline"
                  size="lg"
                  rightIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Buy now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
