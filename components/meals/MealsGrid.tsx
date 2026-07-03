import MealItem from "./MealItem";
import MealsGridClasses from "./MealsGrid.module.css";

type Meals = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export default function MealsGrid({ meals }: { meals: Meals[] }) {
  return (
    <ul className={MealsGridClasses.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
