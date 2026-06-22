import Link from "next/link";
import HomePageClasses from "./page.module.css";
import ImageSlideshow from "@/components/images/ImageSlideshow";

export default function Home() {
  return (
    <>
      <header className={HomePageClasses.header}>
        <div className={HomePageClasses.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={HomePageClasses.hero}>
            <h1>NextLevel Foods for NextLevel Foodies</h1>
            <p>Taste & share food from all over the World!!</p>
          </div>
          <div className={HomePageClasses.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={HomePageClasses.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={HomePageClasses.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
