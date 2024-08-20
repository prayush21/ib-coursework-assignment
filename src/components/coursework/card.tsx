import Image from "next/image";
import React from "react";

export type CourseworkCardProps = {
  id: string;
  title: string;
  content: string;
  thumbnailSrc: string;
  tags: string[];
};

function CourseworkCard({
  id,
  title,
  content,
  tags,
  thumbnailSrc,
}: CourseworkCardProps) {
  return (
    <div
      className="w-full bg-gradient-to-r from-white to-card-golden/30 border-card-golden min-h-20 p-2 rounded-md flex gap-2"
      key={id}
    >
      <Image
        className=" hidden lg:block h-44 w-32"
        src={thumbnailSrc}
        height={180}
        width={120}
        alt="thumbnail"
      />
      <div className="flex flex-col gap-2">
        <div className=" font-semibold line-clamp-2 w-full lg:w-5/6">
          {title}
        </div>
        <div className=" text-sm font-light line-clamp-2 w-full lg:w-5/6">
          {content}
        </div>
        <div className="tags-wrapper flex flex-wrap gap-1">
          {tags.map((tag) => {
            return (
              <div
                key={tag}
                className="bg-white rounded-3xl px-2 text-tagSize text-tag-color font-medium"
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseworkCard;
