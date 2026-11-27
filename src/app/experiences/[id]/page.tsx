import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experiences } from "@/data/experiences";

export const generateStaticParams = () => experiences.map((e) => ({ id: e.id }));

const ExperiencePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const experience = experiences.find((e) => e.id === id);
  if (!experience) notFound();
  return <ExperienceDetail experience={experience} />;
};

export default ExperiencePage;
