import { useEffect, useState } from "react";
import ShowMore from "../../elements/Button/ShowMore";
import SectionLayout from "../../layouts/SectionLayout";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../../../services/articleService";
import type { Article } from "../../../../types/type";

export default function ArtilceSection() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data));
  }, []);

  return (
    <SectionLayout title="My Articles" description="Recent Articles">
      <div className="space-y-4 mb-14">
        {articles.slice(0, 2).map((article) => (
          <ArticleCard
            key={article.id}
            thumbnailUrl={article.thumbnailUrl}
            slug={article.slug}
            title={article.title}
            publishedAt={article.publishedAt}
            categories={article.categories}
            content={article.content}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ShowMore />
      </div>
    </SectionLayout>
  );
}
