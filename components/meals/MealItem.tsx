import Link from "next/link";
import Image from "next/image";

import MealItemClasses from "./MealItem.module.css";

type MealItemPropsType = {
  title: string;
  slug: string;
  image: any;
  summary: string;
  creator: string;
};

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItemPropsType) {
  return (
    <article className={MealItemClasses.meal}>
      <header>
        <div className={MealItemClasses.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={MealItemClasses.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={MealItemClasses.content}>
        <p className={MealItemClasses.summary}>{summary}</p>
        <div className={MealItemClasses.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
