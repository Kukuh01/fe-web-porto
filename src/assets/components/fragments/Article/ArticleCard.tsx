import { Link } from "react-router";
import Date from "../DateBox";
import CategoryTag from "../../elements/CategoryTag";

interface ArticleCardProps {
  title: string;
  thumbnailUrl: string;
  slug: string;
  publishedAt: string;
  content: string;
  categories: string[];
}

export default function ArticleCard({
  title,
  thumbnailUrl,
  slug,
  publishedAt,
  content,
  categories,
}: ArticleCardProps) {
  return (
    <div className="flex">
      <Link to={`/article/${slug}`}>
        <div className="w-fit bg-zinc-800  mb-4 mr-14 rounded-2xl">
          <img
            className="w-xl h-80 rounded-2xl"
            src={thumbnailUrl}
            alt={slug}
          />
        </div>
      </Link>
      <div className="w-xl space-y-2">
        <div className="text-2xl font-bold text-amber-50">{title}</div>
        <Date publishedAt={publishedAt} />
        <div className="text-amber-50 text-lg mb-4">
          <p>{content}</p>
        </div>
        <div className="space-x-3 flex">
          {categories.map((category) => (
            <CategoryTag key={category}>{category}</CategoryTag>
          ))}
        </div>
      </div>
    </div>
  );
}
