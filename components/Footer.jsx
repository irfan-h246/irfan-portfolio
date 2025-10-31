"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Instagram, ArrowUp } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show Back to Top button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="w-full bg-background/70 backdrop-blur-sm border-t-0 py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-2">
          {/* Logo and Description */}
          <div className="flex flex-col items-center gap-1">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Crafted with care by{" "}
              <a
                href="https://github.com/irfan-h246"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Irfan
              </a>
              . Explore more on{" "}
              <a
                href="https://github.com/irfan-h246"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary"
              >
                GitHub
              </a>
              <span className="text-primary">.</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 justify-center mt-2">
            <a
              href="https://github.com/irfan-h246"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.instagram.com/irfanbalti15/?utm_source=qr&igsh=MXJweDhyN3F1aHZ2ag%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/irfan-haider-1179a5361/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/irfan-h246"
              className="hover:text-primary hover:underline transition-colors"
            >
              irfan-h246
            </a>{" "}
            | All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
