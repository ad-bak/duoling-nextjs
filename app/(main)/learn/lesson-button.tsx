"use client";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

function LessonButton({ id, index, totalCount, locked, current, percentage }: Props) {
  return <div>LessonButton</div>;
}

export default LessonButton;
