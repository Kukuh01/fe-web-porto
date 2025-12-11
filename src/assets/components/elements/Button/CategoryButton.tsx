import type { ReactNode } from "react";

export default function CategoryButton({ children }: { children: ReactNode }) {
  return (
    <button className="text-sm font-medium text-amber-50 border-1 border-orange-600 w-fit py-4 px-5 rounded-4xl">
      {children}
    </button>
  );
}
