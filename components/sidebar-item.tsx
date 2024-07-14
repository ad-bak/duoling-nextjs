"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

function SidebarItem({ label, iconSrc, href }: Props) {
  const pathname = usePathname();
  return (
    <Button variant="outline" className="uppercase shadow-md">
      {label}
    </Button>
  );
}

export default SidebarItem;
