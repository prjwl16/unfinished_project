import {cn} from "@/lib/utils";
import {TrendingDown, TrendingUp} from "lucide-react";
import {Separator} from "@/components/ui/separator"


interface InsightBoxProps {
  name: string;
  value: string;
  color: string;
  percentage: number;
}

function InsightBox(
  {name, value, color, percentage}: InsightBoxProps
) {
  return (
    <div className={"flex flex-col items-start w-full py-4 gap-4"}>
      <div className={"flex w-full justify-between"}>
        <div className={cn("text-sm text-gray-500", color)}>{name}</div>
        <div className={cn("flex gap-2 text-sm text-gray-500", color)}>
          {percentage > 0 ? <TrendingUp className={"w-4 h-4"}/> : <TrendingDown className={"w-4 h-4"}/>}
          {percentage}%
        </div>
      </div>
      <div className={"text-2xl font-medium"}>&#8377; {value}</div>
    </div>
  );
}

export default function Insights() {


  const insights = [
    {name: "Income", value: "1,200.00", color: "text-green-500", percentage: 10},
    {name: "Expenses", value: "1,200.00", color: "text-red-500", percentage: -4},
    {name: "Investment", value: "1,200.00", color: "text-violet-500", percentage: -8},
    {name: "Savings", value: "1,200.00", color: "text-yellow-500", percentage: +3},
  ];


  return (
    <div className={"flex gap-12 items-center justify-between"}>
      {insights.map((insight, index) => (
        <>
          <InsightBox key={index} {...insight} />
        </>
      ))}
    </div>
  );
}
