import type { ReactNode } from "react";

export default function Link({
  children,
  href,
  className = "text-sm",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
