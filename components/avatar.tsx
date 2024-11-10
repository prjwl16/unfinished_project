import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={cn("items-center space-x-3 my-8", className)}>
      <Image
        src="/avatar.png"
        alt="Author"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
      />
      <p className="text-sm">
        <span className="block font-medium text-surface-light">John Lago</span>
        <span className="block font-normal text-neutral">@jetpack_john</span>
      </p>
    </div>
  );
};

export default Avatar;
