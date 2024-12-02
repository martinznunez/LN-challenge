
import { Suspense } from "react";

import "./globals.css";
import { ArticlesGrid } from "../modules/articlesGrid";
import {  BUTTON_LABEL_MORE_NOTES, TITLE_ACUMULATED_GRID } from "@/constants";
import {  Button, Loading, Title } from "@/components";


export default async function Home() {

  return (
    <>
    <div  className="lay-sidebar"  >
      <section className="sidebar__main" >
        <div className="line-title">
          <Title  titleValue={TITLE_ACUMULATED_GRID} />
        </div>
        <Suspense fallback={<Loading />}>
          <ArticlesGrid />
        </Suspense>
      </section>

      </div>
      <footer
        className="col-12 hlp-text-center hlp-margintop-40"
        >
        <Button textValue={BUTTON_LABEL_MORE_NOTES} />
      </footer>
      </>
  );
}
