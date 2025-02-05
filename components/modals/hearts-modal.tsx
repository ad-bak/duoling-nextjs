"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  const onClick = () => {
    close();
    router.push("/store");
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_bad.svg" alt="Mascot" height={80} width={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">You ran out of hearts.</DialogTitle>
          <DialogDescription className="text-center text-base">
            Get Pro to get unlimited hearts and continue learning.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="outline"
              className="w-full font-bold text-sm bg-sky-400 text-white shadow-lg border-b-4 border-sky-500
              hover:bg-sky-500 hover:border-sky-600 hover:shadow-xl hover:text-white"
              size="lg"
              onClick={onClick}
            >
              Get Unlimited Hearts
            </Button>
            <Button variant="link" className="w-full text-sky-500 uppercase" size="lg" onClick={close}>
              No, Thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
