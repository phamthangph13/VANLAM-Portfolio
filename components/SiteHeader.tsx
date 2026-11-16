"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoImage from "@/public/images/logo.svg";
import styles from "./SiteHeader.module.css";

const leftLinks = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Cửa hàng", href: "#cua-hang" },
];

const rightLinks = [
  { label: "Liên hệ", href: "#lien-he" },
  { label: "Bộ sưu tập", href: "#bo-suu-tap" },
  { label: "Đối tác", href: "#doi-tac" },
];

const mobileLinks = [...leftLinks, ...rightLinks];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const query = window.matchMedia(
      "(max-width: 767px) and (orientation: portrait)",
    );
    const onChange = () => {
      if (!query.matches) setMenuOpen(false);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <nav className={`${styles.nav} ${styles.navLeft}`} aria-label="Chính">
            {leftLinks.map((link) => (
              <a className={styles.link} href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          <Link
            className={styles.logoLink}
            href="/"
            aria-label="Văn Lam — trang chủ"
          >
            <Image
              className={styles.logo}
              src={logoImage}
              alt="Văn Lam"
              unoptimized
              preload
            />
          </Link>

          <nav className={`${styles.nav} ${styles.navRight}`} aria-label="Phụ">
            {rightLinks.map((link) => (
              <a className={styles.link} href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            ref={toggleRef}
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={styles.mobileMenu}
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Menu di động">
          {mobileLinks.map((link) => (
            <a
              className={styles.mobileLink}
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
