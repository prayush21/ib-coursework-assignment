"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  good: {
    label: "Good",
    color: "hsl(var(--chart-3))",
  },
  average: {
    label: "Average",
    color: "hsl(var(--chart-4))",
  },
  bad: {
    label: "Bad",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

type Props = {
  criteria: string;
  score: number;
  outOf: number;
  className?: string;
};

export default function RadialScoreChart({
  criteria,
  score,
  outOf,
  className,
}: Props) {
  let fillColor;
  const scoreRatio = score / outOf;

  if (scoreRatio <= 1 / 3) {
    fillColor = chartConfig.bad.color;
  } else if (scoreRatio <= 2 / 3) {
    fillColor = chartConfig.average.color;
  } else {
    fillColor = chartConfig.good.color;
  }

  const chartData = [
    { criteria: criteria, score: score, outOf: outOf, fill: fillColor },
  ];

  return (
    <ChartContainer
      key={criteria}
      config={chartConfig}
      className={`mx-0 aspect-square max-h-40 ${className}`}
    >
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={90 - (score / outOf) * 360}
        innerRadius={30}
        outerRadius={40}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
        />
        <RadialBar dataKey="score" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-base font-medium"
                    >
                      {score.toLocaleString()}/{outOf.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
