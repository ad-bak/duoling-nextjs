import { getCourses, getUserProgress } from "@/db/queries";
import List from "./list";

async function CoursePage() {
  const courses = await getCourses();
  const userProgress = await getUserProgress();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-stone-700">Language Course</h1>

      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}

export default CoursePage;
