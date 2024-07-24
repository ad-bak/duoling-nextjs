import { lessons, units } from "@/db/schema";
import UnitBanner from "./unit-banner";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLeeson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

function Unit({ id, order, title, description, lessons, activeLeeson, activeLessonPercentage }: Props) {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative"></div>
    </>
  );
}

export default Unit;
