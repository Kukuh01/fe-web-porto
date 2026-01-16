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
    <div>
      <div className=" bg-zinc-800  mb-4">
        <img className="w-full h-80 rounded-2xl" src={image} alt="" />
      </div>
      <p className="text-amber-50 text-2xl font-bold">{title}</p>
      <p className="text-lg text-gray-500">{status}</p>
    </div>
  );
}
