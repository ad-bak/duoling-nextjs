import { courses } from "@/db/schema";

type Props = {
  course: typeof courses.$inferSelect;
  disabled: boolean;
  onClick: () => void;
  isActive: boolean;
};

function Card({ course, disabled, onClick, isActive }: Props) {
  return <div>Card</div>;
}

export default Card;
