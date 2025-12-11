import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/fragments/Hero/Hero";
import IntroductionCard from "../components/fragments/IntroductionCard";

export default function HomePage() {
  return (
    <PageLayout>
      {/* Start Hero */}
      <Hero>
        <IntroductionCard />
      </Hero>
      {/* End Hero */}
    </PageLayout>
  );
}
