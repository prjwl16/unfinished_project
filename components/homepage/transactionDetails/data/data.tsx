import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
} from "lucide-react"

export const types = [
  {
    label: "Income",
    value: "income",
    icon: HelpCircle,
  },
  {
    label: "Expense",
    value: "expense",
    icon: Circle,
  },
  {
    label: "Investment",
    value: "investment",
    icon: Timer,
  },
  {
    label: "Savings",
    value: "savings",
    icon: CheckCircle,
  }
]

export const categories = [
  {
    label: "Rent",
    value: "rent",
    icon: ArrowDown,
  },
  {
    label: "Entertainment",
    value: "entertainment",
    icon: ArrowRight,
  },
  {
    label: "Groceries",
    value: "groceries",
    icon: ArrowUp,
  },
]
