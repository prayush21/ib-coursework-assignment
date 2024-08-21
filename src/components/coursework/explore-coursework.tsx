import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseworkCard from "./card";

type Props = {};

function ExploreCoursework({}: Props) {
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

  const tabsDataArray = [
    {
      label: "All",
      cardItems: MyCourseworkCardItems,
      value: "all",
    },
    {
      label: "IA Example",
      cardItems: [MyCourseworkCardItems[1]],
      value: "ia_example",
    },
    {
      label: "EE Example",
      cardItems: [MyCourseworkCardItems[0]],
      value: "ee",
    },
    {
      label: "IO Example",
      cardItems: MyCourseworkCardItems,
      value: "io_example",
    },
    {
      label: "TOK Example",
      cardItems: MyCourseworkCardItems,
      value: "tok_example",
    },
  ];
  return (
    <>
      <div className=" text-xl text-slate-500 font-semibold">
        Explore coursework
      </div>
      <Tabs defaultValue="all" className="">
        <TabsList>
          {tabsDataArray.map((tab) => {
            return (
              <TabsTrigger
                className="data-[state=active]:text-primary"
                key={tab.value}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {tabsDataArray.map((tab) => {
          return (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4">
                {tab.cardItems.map((cardItem) => {
                  return (
                    <div key={cardItem.id}>
                      <CourseworkCard {...cardItem} />
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </>
  );
}

export default ExploreCoursework;
