import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

function UserProgress({ activeCourse, hearts, points, hasActiveSubscription }: Props) {
  return (
    <div className="flex items-center justify-between gap-x-2">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={`Course: ${activeCourse.title}`}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image src="/points.svg" alt="Points" width={28} height={28} className="mr-2" />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image src="/heart.svg" alt="Hearts" width={22} height={22} className="mr-2" />
          {hasActiveSubscription ? <InfinityIcon className="h-5 w-5 stroke-[3]" /> : hearts}
        </Button>
      </Link>
    </div>
  );
}

export default UserProgress;
