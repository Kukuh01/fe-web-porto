import type { ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router";

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
}: NavLinkProps) {
  const baseClass =
    "relative px-4 text-sm font-medium transition-all duration-300";

  const hoverClass =
    "hover:text-orange-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

  const activeClass = "text-orange-600 after:w-full after:bg-orange-600";

  if (as === "button") {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} ${hoverClass} text-amber-50 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <RouterNavLink
      to={href || "#"}
      className={({ isActive }) =>
        `${baseClass} ${hoverClass} ${
          isActive ? activeClass : "text-amber-50"
        } ${className}`
      }
    >
      {children}
    </RouterNavLink>
  );
}
