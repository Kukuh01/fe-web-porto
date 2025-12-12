import type { ReactNode } from "react";
import { Link } from "react-router";

export default function NavLink({
  children,
  href,
  className = "text-sm",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
