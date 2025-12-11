import type { ReactNode } from "react";

export default function SectionLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div>
      <hr className="text-gray-800" />
      <div className="mt-6 mb-10">
        <div className="mb-10">
          <p className="text-2xl text-amber-50">{title}</p>
          <p className="text-4xl text-orange-600 font-bold">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
