import {Badge} from "@/components/ui/badge";
import {RotateCcw, TrendingDown, TrendingUp} from "lucide-react";
import React from "react";

interface TransactionRowProps {
  name: string;
  amount: number;
  type: string;
  category: string;
}

interface typeIconMapProp {
  [key: string]: React.JSX.Element;
}

export default function TransactionRow(
  props: TransactionRowProps
) {

  const {name, amount, type, category} = props

  const typeIconMap : typeIconMapProp = {
    income: <TrendingUp size={20} className={"mr-4 text-green-500"}/>,
    expense: <TrendingDown size={20} className={"mr-4 text-red-500"}/>,
    subscription: <RotateCcw size={20} className={"mr-4 text-red-500"}/>
  }

  return (
    <div className={"flex items-center justify-between gap-10"}>
      <div className={"flex w-full items-center"}>
        {typeIconMap[type]}
        <span>{name}</span>
      </div>
      <div className={"flex w-full justify-center"}>
        <Badge variant={"outline"}> {amount} </Badge>
      </div>
      <div className={"flex w-full justify-end mr-2"}>
        <Badge variant={"secondary"}>{category}</Badge>
      </div>
    </div>
  )
}
