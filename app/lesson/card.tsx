import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
  text: string;
  imageSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status?: "correct" | "wrong" | "none";
  audioSrc: string | null;
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
};

function Card({ id, text, imageSrc, shortcut, selected, onClick, status, audioSrc, disabled, type }: Props) {
  return (
    <div
      onClick={() => {}}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2"
      )}
    >
      Card
    </div>
  );
}

export default Card;
