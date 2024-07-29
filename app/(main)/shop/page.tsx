import FeedWrapper from "@/components/feed-wrapper";
import SitckyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import Items from "./items";

async function ShopPage() {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48p] px-6">
      <SitckyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </SitckyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/shop.svg" alt="Shop" width={90} height={90} />
        </div>
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">Shop</h1>
        <p className="text-muted-foreground text-center mb-6 text-lg">Spend your points on cool stuff.</p>
        <Items hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={false} />
      </FeedWrapper>
    </div>
  );
}

export default ShopPage;
