import Image from "next/image";
import React from "react";
import courseworkImage from "../../../public/assets/image.png";
import CourseworkUpload from "@/components/coursework-upload";
type Props = {};

export default function CourseworkPage({}: Props) {
  return (
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
  );
}
