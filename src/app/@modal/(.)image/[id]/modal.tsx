"use client";

import { useEffect } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <div className="fixed top-0 h-screen w-screen bg-black/60">
      <p>this is photo modal</p>
      {children}
    </div>
  );
}
