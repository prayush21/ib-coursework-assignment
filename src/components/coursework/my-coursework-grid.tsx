import React from "react";
import CourseworkCard, { CourseworkCardProps } from "./card";

type MyCourseworkGridProps = {
  cardItems: CourseworkCardProps[];
};

export default function MyCourseworkGrid({ cardItems }: MyCourseworkGridProps) {
  return (
    <>
      <div className=" text-xl text-slate-500 font-semibold">My coursework</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4">
        {cardItems.map((cardItem) => {
          return (
            <div key={cardItem.id}>
              <CourseworkCard {...cardItem} />
            </div>
          );
        })}
      </div>
    </>
  );
}
