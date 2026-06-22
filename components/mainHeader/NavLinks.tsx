"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinkClasses from "./NavLinks.module.css";

export default function NavLinks({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`${NavLinkClasses.navLinks} ${path.startsWith(href) ? NavLinkClasses.active : ""}`}
      >
        {children}
      </Link>
    </li>
  );
}
