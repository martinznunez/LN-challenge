import { Suspense } from "react";
import { Loading } from "@/components";
import { SlugGrid } from "@/modules/slugGrid";

interface SlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SlugPage({ params }: SlugPageProps) {
 
  const resolvedParams = await params;
  const { slug } = resolvedParams;
 

  return (
    <div className="lay-sidebar">
      <section className="sidebar__main">
        <Suspense fallback={<Loading />}>
          <SlugGrid slug={slug} />
        </Suspense>
      </section>
    </div>
  );
}
