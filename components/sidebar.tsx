import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function Sidebar({ className }: Props) {
  return (
    <div
      className={cn("flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top- px-4 border-r-2 flex-col", className)}
    >
      Sidebar
    </div>
  );
}

export default Sidebar;
