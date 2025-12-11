import ShowMore from "../../elements/Button/ShowMore";
import SectionLayout from "../../layouts/SectionLayout";
import ArticleCard from "./ArticleCard";

export default function ArtilceSection() {
  return (
    <SectionLayout title="My Articles" description="Recent Articles">
      <div className="space-y-4 mb-14">
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className="flex justify-center">
        <ShowMore />
      </div>
    </SectionLayout>
  );
}
