import Header from "@/components/homepage/header";
import Hero from "@/components/homepage/hero";
import Insights from "@/components/homepage/insights";
import TransactionDetails from "@/components/homepage/transactionDetails/transaction-details";

export default function Home() {
  return (
    <div className={"max-w-xl mx-auto h-screen my-4"}>
      <Header/>
      <Hero />
      <Insights />
      <TransactionDetails />
    </div>
  );
}
