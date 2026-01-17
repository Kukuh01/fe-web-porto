export default function ProjectCard({
  title,
  status,
  image,
}: {
  title: string;
  status: string;
  image: string;
}) {
  return (
    <div className="group transition-all duration-300 hover:-translate-y-2">
      <div className="bg-zinc-800 mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-orange-500/20">
        <img
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
        />
      </div>
      <p className="text-amber-50 text-2xl font-bold transition-colors group-hover:text-orange-400">
        {title}
      </p>
      <p className="text-lg text-gray-500">{status}</p>
    </div>
  );
}
