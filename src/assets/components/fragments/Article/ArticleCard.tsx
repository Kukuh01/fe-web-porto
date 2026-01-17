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
    <div
      className="group flex flex-col lg:flex-row lg:gap-8 
                    transition-all duration-300 ease-out
                    hover:scale-[1.01] hover:shadow-xl"
    >
      <Link to={`/article/${slug}`} className="block">
        <div className="w-full bg-zinc-800 mr-14 rounded-2xl overflow-hidden">
          <img
            className="w-full h-80 rounded-2xl object-cover
                       transition-transform duration-300
                       group-hover:scale-105"
            src={thumbnailUrl}
            alt={slug}
          />
        </div>
      </Link>

      <div className="w-full space-y-2 lg:w-xl">
        <div
          className="text-2xl font-bold text-amber-50
                        transition-colors
                        group-hover:text-amber-400"
        >
          {title}
        </div>

        <Date publishedAt={publishedAt} />

        <div className="text-amber-50 text-lg mb-4 line-clamp-3">
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
