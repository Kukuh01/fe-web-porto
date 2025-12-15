import { FaCalendarAlt } from "react-icons/fa";

export default function DateBox({
  publishedAt = "15 December 2023",
}: {
  publishedAt?: string;
}) {
  return (
    <div className="text-orange-600 flex items-center text-lg space-x-2">
      <FaCalendarAlt />
      <p>{publishedAt}</p>
    </div>
  );
}
