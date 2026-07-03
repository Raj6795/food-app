import MealsLoadingPageClasses from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={MealsLoadingPageClasses.loading}>Fetching meals...</p>;
}
