import ArtilceSection from "../components/fragments/Article/ArticleSection";
import Hero from "../components/fragments/Hero";
import PageLayout from "../components/layouts/PageLayout";

export default function ArtilcesPage() {
  return (
    <PageLayout>
      <Hero>
        <div></div>
      </Hero>
      <ArtilceSection />
    </PageLayout>
  );
}
