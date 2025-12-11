import type { ReactNode } from "react";

export default function Icon({
  children,
  href,
  className = "text-4xl",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
      <a href={href} target="_blank" className={className}>
        {children}
      </a>
    </div>
  );
}
