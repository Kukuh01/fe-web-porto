import Link from "../elements/Link/Link";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <div className="w-3xl h-fit border-1 border-orange-700 rounded-4xl flex justify-between">
        <div className="w-md rounded-3xl bg-orange-700 py-4 text-amber-50 font-bold relative">
          <div className="absolute left-5">
            <a href="/">
              <p>SilvanusWeb</p>
            </a>
          </div>
        </div>
        <div className="py-4 text-amber-50 w-xl flex justify-around">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/product">Products</Link>
          <Link href="/article">Articles</Link>
        </div>
      </div>
    </div>
  );
}
