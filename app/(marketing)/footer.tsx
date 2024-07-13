import { Button } from "@/components/ui/button";
import Image from "next/image";

function Footer() {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full uppercase">
          <Image src="/hr.svg" height={40} width={32} alt="Mascot" className="mr-4 rounded-md" />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full uppercase">
          <Image src="/es.svg" height={40} width={32} alt="Mascot" className="mr-4 rounded-md" />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full uppercase">
          <Image src="/fr.svg" height={40} width={32} alt="Mascot" className="mr-4 rounded-md" />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full uppercase">
          <Image src="/it.svg" height={40} width={32} alt="Mascot" className="mr-4 rounded-md" />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full uppercase">
          <Image src="/jp.svg" height={40} width={32} alt="Mascot" className="mr-4 rounded-md" />
          Japanese
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
