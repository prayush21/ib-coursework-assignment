import React from "react";
import DetailedAccordion from "./detailed-accordion";

type Props = {
  expandFileView: boolean;
  setExpandFileView: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

function DetailedEvaluation({
  expandFileView,
  setExpandFileView,
  collapsed,
  setCollapsed,
}: Props) {
  return (
    <>
      <div className="flex md:hidden col-span-3 w-full">
        {!expandFileView && <DetailedAccordion />}
      </div>
      <div className="hidden md:block lg:hidden col-span-7 w-full">
        {<DetailedAccordion />}
      </div>
    </>
  );
}

export default DetailedEvaluation;
