import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
};

function UnitBanner({ title, description }: Props) {
  return (
    <div className="w-full rounded-xl bg-green-500 p-5 text-wrap flex items-center justify-between">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <Link href="/lesson">
        <Button
          variant="secondary"
          size="lg"
          className="bg-green-500 hidden lg:flex border-2 border-b-4 border-green-600"
        >
          <NotebookText className="mr-2" />
          Continue
        </Button>
      </Link>
    </div>
  );
}

export default UnitBanner;
