import { Suspense } from "react";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";

const ExperiencesPage = () => (
  <div className="space-y-5">
    <h1 className="text-2xl font-bold">Explorador de experiencias</h1>
    <Suspense fallback={<p className="text-slate-500">Cargando…</p>}>
      <ExperienceExplorer />
    </Suspense>
  </div>
);

export default ExperiencesPage;
