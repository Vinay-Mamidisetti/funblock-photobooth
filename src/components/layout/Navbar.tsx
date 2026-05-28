"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { site } from "@/constants/site";
import { navLinks } from "@/constants/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (typeof window !== "undefined" && window.location.pathname === "/") {
            event.preventDefault();
            const homeSection = document.getElementById("home");
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
                        ? "bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_20px_50px_-35px_rgba(58,45,36,0.12)]"
                        : "bg-[var(--background)]/90"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
                    <div className="h-[70px] flex items-center justify-between">
                        <Link href="/#home" onClick={handleHomeClick} className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-md">
                                <Image
                                    src="/logo/logo.png" // Points directly to public/logo/logo.png
                                    alt="Funblock Photobooth Logo"
                                    fill
                                    sizes="40px"
                                    className="object-contain"
                                    priority // Ensures the logo loads instantly without lazy-loading lag
                                />
                            </div>

                            {/* Logo Text Wrapper */}
                            <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                                <span className="text-2xl font-semibold tracking-tight text-[var(--text)]">
                                    Funblock
                                </span>
                                <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--accent)] font-medium">
                                    Photobooth
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={item.href === "/" ? handleHomeClick : undefined}
                                    className="relative text-sm text-[var(--text)]/80 hover:text-[var(--accent)] transition-colors duration-300 group"
                                >
                                    {item.label}

                                    <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href={`tel:${site.phoneRaw}`}
                                className="px-5 py-3 rounded-full bg-[var(--accent)] text-sm font-medium hover:bg-[rgba(123,77,40,0.95)] transition-all duration-300 inline-flex items-center gap-2"
                            >
                               <Phone className="h-4 w-4 text-white" />
                               <span className="text-white">Book Now</span>
                            </a>
                            <a
                                href={`sms:${site.phoneRaw}?body=${encodeURIComponent(
                                    "Hi! I am interested in Funblock Photobooth services."
                                )}`}
                                className="px-4 py-2 rounded-full bg-[#007aff] text-sm font-medium text-white hover:bg-[#0066e6] transition-all duration-300 inline-flex items-center gap-2"
                            >
                                <MessageCircle className="h-4 w-4 text-white" />
                                <span className="text-white hidden md:inline">iMessage</span>
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[60] bg-[var(--background)]/95 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 300,
                            }}
                            className="fixed top-0 right-0 z-[70] h-screen w-full sm:w-[420px] bg-[var(--surface)] border-l border-[var(--border)]"
                        >
                            <div className="flex flex-col h-full px-6 py-6">
                                {/* Top */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-[var(--text)]">
                                            Funblock
                                        </h2>

                                        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mt-1">
                                            Photobooth
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                                    >
                                        <X size={22} />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="flex flex-col mt-16">
                                    {navLinks.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: index * 0.08,
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between py-5 border-b border-[var(--border)] text-[var(--text)] text-lg font-medium hover:text-[var(--accent)] transition-colors duration-300"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom CTA */}
                                <div className="mt-auto space-y-4">
                                    <a
                                        href={`tel:${site.phoneRaw}`}
                                        className="text-white flex items-center justify-center w-full rounded-full bg-[var(--accent)] px-6 py-4 font-semibold transition-all duration-300 hover:bg-[rgba(123,77,40,0.95)]"
                                    >
                                        <span className="text-white">Call Now</span>
                                    </a>
                                    <a
                                        href={site.whatsappUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center w-full rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-[var(--text)] font-medium hover:bg-[var(--background)] transition-all duration-300"
                                    >
                                        <span className="text-[var(--text)]">WhatsApp</span>
                                    </a>
                                    <a
                                        href={`sms:${site.phoneRaw}?body=${encodeURIComponent(
                                            "Hi! I am interested in Funblock Photobooth services."
                                        )}`}
                                        className="flex items-center justify-center w-full rounded-full border border-[var(--border)] bg-[#007aff] px-6 py-4 text-white font-medium hover:bg-[#0066e6] transition-all duration-300"
                                    >
                                        <span className="text-white">iMessage</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;