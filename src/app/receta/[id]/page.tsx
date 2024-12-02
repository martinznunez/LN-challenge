import { Loading, Title } from "@/components";
import { RECIPE_TITLE } from "@/constants";
import { RecipeOverview } from "@/modules/recipeOverview";
import { Suspense } from "react";

export default function Recipe() {
  return (
    <div className="layout-container">
      <section className="sidebar-main">
        <div className="title-container">
          <Title className="custom-title" titleValue={RECIPE_TITLE} />
        </div>
        <Suspense fallback={<div className="loading-container"><Loading /></div>}>
          <RecipeOverview />
        </Suspense>
      </section>
    </div>
  );
}

