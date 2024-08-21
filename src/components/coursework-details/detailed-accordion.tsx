import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import GreenTick from "../icons/green-tick";
import YellowMark from "../icons/yellow-mark";
import RadialScoreChart from "./radial-score-chart";

type Props = {};

export default function DetailedAccordion({}: Props) {
  let items = [
    {
      criteria: "A",
      criteriaLabel: "Understanding Knowledge Questions through improving",
      score: 7,
      outOf: 10,
      content: {
        description:
          "The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.",
        strengths: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        scopes: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
      },
    },
    {
      criteria: "B",
      criteriaLabel: "Understanding Knowledge Questions..",
      score: 5,
      outOf: 10,
      content: {
        description:
          "The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.",
        strengths: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        scopes: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
      },
    },
    {
      criteria: "C",
      criteriaLabel: "Improve Knowledge Questions..",
      score: 3,
      outOf: 10,
      content: {
        description:
          "The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.",
        strengths: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        scopes: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
      },
    },
  ];
  return (
    <Accordion className="block space-y-2 w-full" type="multiple">
      {items.map(({ criteria, criteriaLabel, content, score, outOf }) => {
        return (
          <AccordionItem
            key={criteria}
            className="bg-white rounded-md px-4"
            value={criteria}
          >
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div>
                  <RadialScoreChart
                    criteria={criteria}
                    score={score}
                    outOf={outOf}
                    className=" h-20 w-20"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className=" text-slate-500 font-normal">
                    Criteria {criteria}
                  </div>
                  <div className="font-medium text-slate-700 text-base line-clamp-2 text-left">
                    {criteriaLabel}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Separator className="my-2" />
              <div className=" flex flex-col gap-2 w-full">
                <p className=" text-slate-600 font-normal">
                  {content.description}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-semibold">Strengths</div>
                  <div className="border border-good-green rounded-md bg-good-green/5 p-4">
                    {content.strengths.map((value) => {
                      return (
                        <div key={value} className="flex gap-4 items-start">
                          <GreenTick />
                          {value}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-semibold">
                    Scope of Improvement
                  </div>
                  <div className="border border-average-yellow rounded-md bg-average-yellow/5 p-4">
                    {content.scopes.map((value) => {
                      return (
                        <div key={value} className="flex gap-4 items-start">
                          <YellowMark />
                          {value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
