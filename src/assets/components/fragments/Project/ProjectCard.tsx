export default function ProjectCard({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div>
      <div className="w-xl h-80 bg-zinc-800 rounded-2xl mb-4"></div>
      <p className="text-amber-50 text-2xl font-bold">{title}</p>
      <p className="text-lg text-gray-500">{status}</p>
    </div>
  );
}
