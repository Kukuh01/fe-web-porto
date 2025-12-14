import { FaCalendarAlt } from "react-icons/fa";
import CategoryButton from "../../elements/Button/CategoryButton";

export default function ArticleCard(
  title: string,
  thumbnail: string,
  altText: string,
  publishDate: string,
  content: string,
  categories: string[]
) {
  return (
    <div className="flex">
      <div className="w-fit bg-zinc-800  mb-4 mr-14 rounded-2xl">
        <img className="w-xl h-80 rounded-2xl" src={thumbnail} alt={altText} />
      </div>
      <div className="w-xl space-y-2">
        <div className="text-2xl font-bold text-amber-50">{title}</div>
        <div className="text-orange-600 flex items-center text-lg space-x-2">
          <FaCalendarAlt />
          <p>{publishDate}</p>
        </div>
        <div className="text-amber-50 text-lg mb-4">
          <p>{content}</p>
        </div>
        <div className="space-x-3">
          <CategoryButton>{categories}</CategoryButton>
        </div>
      </div>
    </div>
  );
}
