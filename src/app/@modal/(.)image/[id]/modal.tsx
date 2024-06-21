"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="fixed top-0 h-screen w-screen bg-black/60 p-10">
      <Button
        variant="ghost"
        className="absolute right-2 top-2 aspect-square p-0 hover:bg-white/10"
        onClick={() => router.back()}
      >
        <X size={34} className="" />
      </Button>
      <div className="grid h-full w-full grid-cols-4 gap-2">{children}</div>
    </div>
  );
}
