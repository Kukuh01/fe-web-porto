import NavLink from "../elements/NavLink";

export default function Navbar({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  return (
    <div className="sticky top-0 z-50 w-full h-20 flex items-center justify-center">
      <div className="w-3xl h-fit border-1 border-orange-700 rounded-4xl flex justify-between backdrop-blur bg-zinc-900/80">
        <div className="w-md rounded-3xl bg-orange-700 py-4 text-amber-50 font-bold relative">
          <div className="absolute left-5">
            <a href="/">
              <p>SilvanusWeb</p>
            </a>
          </div>
        </div>
        <div className="py-4 text-amber-50 w-xl flex justify-around">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink as="button" onClick={onContactClick}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
