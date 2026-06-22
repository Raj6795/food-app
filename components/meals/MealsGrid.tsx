import MealItem from "./MealItem";
import MealsGridClasses from "./MealsGrid.module.css";

export default function MealsGrid({ meals }: { meals: any[] }) {
  return (
    <ul className={MealsGridClasses.grid}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
