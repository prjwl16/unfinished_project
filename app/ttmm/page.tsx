import Header from "@/components/ttmm/homepage/header"
import Hero from "@/components/ttmm/homepage/hero"
import Insights from "@/components/ttmm/homepage/insights"
import TransactionDetails from "@/components/ttmm/homepage/transactionDetails/transaction-details"

export default function TtmmHome() {
  return (
    <div className={"max-w-xl mx-auto h-screen my-4"}>
      <Header />
      <Hero />
      <Insights />
      <TransactionDetails />
    </div>
  )
}
