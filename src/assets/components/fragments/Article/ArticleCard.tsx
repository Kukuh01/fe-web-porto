import { FaCalendarAlt } from "react-icons/fa";
import CategoryButton from "../../elements/Button/CategoryButton";

export default function ArticleCard() {
  return (
    <div className="flex">
      <div className="w-xl h-80 bg-zinc-800 rounded-2xl mb-4 mr-14"></div>
      <div className="w-xl space-y-2">
        <div className="text-2xl font-bold text-amber-50">
          How C++ Still The Best Programming Language ?
        </div>
        <div className="text-orange-600 flex items-center text-lg space-x-2">
          <FaCalendarAlt />
          <p>December 9 2025</p>
        </div>
        <div className="text-amber-50 text-lg mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque est
            adipisci voluptate deleniti sint quas nisi perspiciatis ea labore,
            repellendus rerum voluptatem tempora quia et molestias dolorum odit
            maxime iste?
          </p>
        </div>
        <div className="space-x-3">
          <CategoryButton>Programming</CategoryButton>
          <CategoryButton>Education</CategoryButton>
        </div>
      </div>
    </div>
  );
}
