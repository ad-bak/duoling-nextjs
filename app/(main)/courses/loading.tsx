import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader className="h-12 w-12 text-primary-500 text-muted-foreground animate-spin" />
    </div>
  );
};

export default Loading;
