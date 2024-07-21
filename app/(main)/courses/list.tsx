"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

function List({ courses, activeCourseId }: Props) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      router.push(`/courses/${id}`);
    }

    startTransition(() => {
      upsertUserProgress(id);
    });
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          course={course}
          disabled={false}
          onClick={onClick}
          isActive={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}

export default List;
