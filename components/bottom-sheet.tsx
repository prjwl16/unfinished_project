"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pill } from "./pill";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import Icons from "./icons";

interface BottomSheetProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  className?: string;
  isDark?: boolean;
}

export function BottomSheet({
  tabs,
  activeTab,
  setActiveTab,
  className,
  isDark = false,
}: BottomSheetProps) {
  return (
    <div className={cn("", className)}>
      <Sheet key="bottom">
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex items-center justify-end">
            <Icons.hamburger
              className={cn("text-brand", isDark && "text-white")}
            />
            <span className={cn("ml-1 text-brand", isDark && "text-white")}>
              Categories
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle className="text-white text-left mb-6">
              Categories
            </SheetTitle>
            <SheetDescription className="flex flex-col space-y-4">
              {tabs.map((tab) => (
                <Pill
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  variant={activeTab === tab ? "outline" : "ghost"}
                  className="space-y-1 px-3 py-2 w-fit"
                >
                  {tab}
                </Pill>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
