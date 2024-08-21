import React from "react";
import RadialScoreChart from "./radial-score-chart";
import DetailedAccordion from "./detailed-accordion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type Props = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

function OverallScore({ collapsed, setCollapsed }: Props) {
  return (
    <div
      className={`lg:order-last col-span-7 ${
        !collapsed ? "col-span-3" : "col-span-7"
      } space-y-4`}
    >
      <div className="flex flex-row rounded-md bg-white justify-between p-3 max-h-28">
        <div className="flex flex-col gap-[2px]">
          <div className=" text-base font-light">Overall Score</div>
          <div className=" text-2xl font-semibold text-black ">
            Remark : Good
          </div>
          <div className=" text-xs font-thin text-[rgba(61, 64, 75, 1)]">
            Evaluated on 12 Jul 2024
          </div>
        </div>
        <RadialScoreChart
          criteria="overall"
          score={13}
          outOf={20}
          className="h-20 w-20"
        />
      </div>
      <div className="w-full hidden lg:block">
        <DetailedAccordion />
      </div>
      {!collapsed && (
        <Button
          onClick={() => setCollapsed((prev) => !prev)}
          variant="outline"
          className="hidden lg:flex font-semibold text-primary col-start-1 w-fit"
        >
          Check detailed Evaluation <ArrowRight />
        </Button>
      )}
    </div>
  );
}

export default OverallScore;
