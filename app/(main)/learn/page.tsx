import FeedWrapper from "@/components/feed-wrapper";
import SitckyWrapper from "@/components/sticky-wrapper";
import Header from "./header";
import UserProgress from "@/components/user-progress";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import Unit from "./unit";

async function LearnPage() {
  const unitsData = getUnits();
  const userProgressData = getUserProgress();

  const [userProgress, units] = await Promise.all([userProgressData, unitsData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <SitckyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        ></UserProgress>
      </SitckyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-8">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLeeson={undefined}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
}

export default LearnPage;
