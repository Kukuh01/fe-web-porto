import type { ReactNode } from "react";

export default function CategoryTag({ children }: { children: ReactNode }) {
  return (
    <div className="text-sm font-medium text-amber-50 border-1 border-orange-600 w-fit py-4 px-5 rounded-4xl">
      {children}
    </div>
  );
}
