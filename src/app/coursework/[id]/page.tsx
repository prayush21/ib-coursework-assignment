"use client";

import DetailedEvaluation from "@/components/coursework-details/detailed-evaluation";
import OverallScore from "@/components/coursework-details/overall-score";
import ViewFile from "@/components/coursework-details/view-file";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

type Props = {};

function CourseworkDetailsPage({}: Props) {
  const [expandFileView, setExpandFileView] = useState<boolean>(true);
  const [collpased, setCollapsed] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-7 w-full">
      <OverallScore collapsed={collpased} setCollapsed={setCollapsed} />
      {expandFileView && (
        <Button
          onClick={() => setExpandFileView(false)}
          variant="outline"
          className="flex md:hidden font-semibold text-primary col-start-1 w-fit"
        >
          Check detailed Evaluation <ArrowRight />
        </Button>
      )}
      {!expandFileView && (
        <Button
          onClick={() => setExpandFileView(true)}
          variant="outline"
          className="flex md:hidden font-semibold text-primary col-start-1 w-fit"
        >
          Expand & view your file <ArrowRight />
        </Button>
      )}
      <ViewFile
        expandFileView={expandFileView}
        setExpandFileView={setExpandFileView}
        collapsed={collpased}
        setCollapsed={setCollapsed}
      />
      <DetailedEvaluation
        collapsed={collpased}
        setCollapsed={setCollapsed}
        expandFileView={expandFileView}
        setExpandFileView={setExpandFileView}
      />
    </div>
  );
}

export default CourseworkDetailsPage;
