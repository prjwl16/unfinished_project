import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info as InfoIcon } from "lucide-react";

interface Props {
  info?: string;
}

const Info = ({ info = "Info" }: Props) => (
  <TooltipProvider>
    <TooltipComponent>
      <TooltipTrigger>
        <InfoIcon
          size={16}
          className="text-surface-light h-4 w-4 ml-1 -mb-0.5"
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>{info}</p>
      </TooltipContent>
    </TooltipComponent>
  </TooltipProvider>
);

export default Info;
