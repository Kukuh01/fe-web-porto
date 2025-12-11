import SectionLayout from "../../layouts/SectionLayout";
import ArticleCard from "./ArticleCard";

export default function ArtilceSection() {
  return (
    <SectionLayout title="My Articles" description="Recent Articles">
      <div className="space-y-4">
        <ArticleCard />
        <ArticleCard />
      </div>
    </SectionLayout>
  );
}
