import type { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return <div className="flex w-full justify-between h-96">{children}</div>;
}
