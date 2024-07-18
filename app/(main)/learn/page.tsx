import FeedWrapper from "@/components/feed-wrapper";
import SitckyWrapper from "@/components/sticky-wrapper";
import Header from "./header";
import UserProgress from "@/components/user-progress";

function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <SitckyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={true}
        ></UserProgress>
      </SitckyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
}

export default LearnPage;
