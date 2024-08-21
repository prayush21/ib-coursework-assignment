import Image from "next/image";
import React from "react";
import courseworkImage from "../../../public/assets/image.png";
import CourseworkUpload from "@/components/coursework/coursework-upload";
import MyCourseworkGrid from "@/components/coursework/my-coursework-grid";
import ExploreCoursework from "@/components/coursework/explore-coursework";
type Props = {};

export default function CourseworkPage({}: Props) {
  const MyCourseworkCardItems = [
    {
      id: "2834r3289u-239fu32-02fi3-dsf4w49",
      title:
        "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
      content:
        "How does the temperature Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel doloribus, explicabo recusandae quia culpa corporis voluptate ratione quisquam. Rem corporis illum aperiam quam maxime nostrum ad quisquam dolorem itaque.ipe affect the time it takes a magnet to fall thought",
      thumbnailSrc: "/assets/thumbnail.png",
      tags: [
        "📚 Physics HL",
        "⏳ 18 min read",
        "🔤 2368 words",
        "⭐ 7/7",
        "🈳English",
      ],
    },
    {
      id: "239fu32-239fu32-02fi3-dsf4w49",
      title:
        "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
      content:
        "How does the temperature Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel doloribus, explicabo recusandae quia culpa corporis voluptate ratione quisquam. Rem corporis illum aperiam quam maxime nostrum ad quisquam dolorem itaque.ipe affect the time it takes a magnet to fall thought",
      thumbnailSrc: "/assets/thumbnail.png",
      tags: [
        "📚 Physics HL",
        "⏳ 18 min read",
        "🔤 2368 words",
        "⭐ 7/7",
        "🈳 English",
      ],
    },
    {
      id: "02fi3-239fu32-02fi3-dsf4w49",
      title:
        "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
      content:
        "How does the temperature Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel doloribus, explicabo recusandae quia culpa corporis voluptate ratione quisquam. Rem corporis illum aperiam quam maxime nostrum ad quisquam dolorem itaque.ipe affect the time it takes a magnet to fall thought",
      thumbnailSrc: "/assets/thumbnail.png",
      tags: [
        "📚 Physics HL",
        "⏳ 18 min read",
        "🔤 2368 words",
        "⭐ 7/7",
        "🈳English",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 overflow-scroll">
      <div className="flex flex-row gap-3 w-full">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold tracking-normal">
            Hey IB Folks ! Unsure about the quality of your answers?{" "}
            <span className=" text-violet-700">We get you.</span>
          </div>
          <CourseworkUpload />
        </div>
        <Image
          className="hidden lg:block"
          style={{ height: "528px", width: "290px" }}
          src={courseworkImage}
          height={528}
          width={290}
          alt="coursework-image"
        />
      </div>
      <MyCourseworkGrid cardItems={MyCourseworkCardItems} />
      <ExploreCoursework />
    </div>
  );
}
