import { getCourses } from "@/db/queries";

async function CoursePage() {
  const data = await getCourses();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-stone-700">Language Course</h1>

      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2">
        {data.map((course) => (
          <div key={course.id} className="flex flex-col p-4 bg-white rounded-lg shadow-md">
            <img src={course.imageSrc} alt={course.title} className="h-48 object-cover" />
            <h2 className="mt-3 text-lg font-semibold">{course.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage;
