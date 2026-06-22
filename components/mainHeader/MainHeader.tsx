import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/assets/logo.png";
import headerClasses from "./MainHeader.module.css";
import NavLinks from "./NavLinks";

export default function MainHeader() {
  return (
    <header className={headerClasses.header}>
      <Link href="/" className={headerClasses.logo}>
        <Image src={HeaderLogo} alt="Food App Logo" priority />
        Next Level Food App
      </Link>

      <nav className={headerClasses.nav}>
        <ul>
          <NavLinks href="/meals">Explore Meals</NavLinks>
          <NavLinks href="/community">Join the community</NavLinks>
        </ul>
      </nav>
    </header>
  );
}
