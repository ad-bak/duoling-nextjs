"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

function SidebarItem({ label, iconSrc, href }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <>
      <Button
        variant="outline"
        className={`flex items-center gap-x-2 w-full justify-start h-[52px] ${active ? "bg-green-500 text-white" : ""}`}
        asChild
      >
        <Link href={href}>
          <Image src={iconSrc} height={32} width={32} alt={label} />
          {label}
        </Link>
      </Button>
    </>
  );
}

export default SidebarItem;
