
import { Suspense } from "react";

import { Loading } from "@/components";
import { SlugGrid } from "@/modules/slugGrid";


interface SlugPageProps {
  params: {
    slug: string;
  };
}

export default async function SlugPage({ params }: SlugPageProps) {

  
  return (
    <div className="lay-sidebar">
      <section className="sidebar__main">
        <Suspense fallback={<Loading />}>
          <SlugGrid slug={params.slug} />
        </Suspense>
      </section>
    </div>
  );
}

