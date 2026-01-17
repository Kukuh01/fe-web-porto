import type { ReactNode } from "react";
import { Link } from "react-router";

interface NavLinkProps {
  children: ReactNode;
  className?: string;
  href?: string;
  as?: "link" | "button";
  onClick?: () => void;
}

export default function NavLink({
  children,
  href,
  className = "text-sm",
  as = "link",
  onClick,
  ...rest
}: NavLinkProps) {
  if (as === "button") {
    return (
      <button onClick={onClick} className={className} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <Link to={href || "#"} className={className} {...rest}>
      {children}
    </Link>
  );
}
