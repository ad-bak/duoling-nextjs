import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  value: number;
  variant: "points" | "hearts";
};

function ResultCard({ value, variant }: Props) {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";
  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-400 border-orange-400",
        variant === "hearts" && "bg-rose-400 border-rose-400"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white  rounded-t-xl font-bold text-center uppercase text-xs",
          variant === "hearts" && "bg-rose-500",
          variant === "points" && "bg-orange-500"
        )}
      >
        {variant === "hearts" ? "Hearts Left" : "Total XP"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
          variant === "points" && "text-rose-500",
          variant === "hearts" && "text-orange-500"
        )}
      >
        <Image alt={variant} src={imageSrc} height={30} width={30} className="mr-1.5" />
        {value}
      </div>
    </div>
  );
}

export default ResultCard;
