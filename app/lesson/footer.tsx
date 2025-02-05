import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { useKey, useMedia } from "react-use";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
};

function Footer({ onCheck, status, disabled, lessonId }: Props) {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");
  return (
    <footer
      className={cn(
        "lg:-h[140px] h-[100px] border-t-2",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Nicely Done !
          </div>
        )}
        {status === "wrong" && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Don&apos;t give up !
          </div>
        )}
        {status === "completed" && (
          <Button
            variant="outline"
            size={isMobile ? "sm" : "lg"}
            className="uppercase font-bold"
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )}
        <Button
          disabled={disabled}
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          className={cn(
            "ml-auto bg-green-300 text-white text-xl font-bold uppercase shadow-lg border-b-4 border-green-500 hover:bg-green-400",
            status === "wrong" && "bg-rose-300 border-rose-500 hover:bg-rose-400"
          )}
        >
          {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
          {status === "completed" && "Continue"}
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
