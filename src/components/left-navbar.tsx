"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  AssignmentsMenuIcon,
  BooksMenuIcon,
  CourseWorkMenuIcon,
  QuizMenuIcon,
} from "./icons";
import LogoIcon from "./icons/logo";

type Props = {};

export default function LeftNavbar({}: Props) {
  return (
    <div className=" flex flex-col items-center my-4">
      <LogoIcon className="mb-6" />

      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem hidden value="default" id="r1" />

          <Label htmlFor="r1">
            <CourseWorkMenuIcon
              className={"fill-white bg-primary rounded-full p-1"}
            />
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem hidden value="comfortable" id="r2" />
          <Label htmlFor="r2">
            <BooksMenuIcon className={"  rounded-full p-1"} />
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem hidden value="compact" id="r3" />
          <Label htmlFor="r3">
            <AssignmentsMenuIcon className={"rounded-full p-1"} />
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem hidden value="compact" id="r3" />
          <Label htmlFor="r4">
            <QuizMenuIcon className={"rounded-full p-1"} />
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
