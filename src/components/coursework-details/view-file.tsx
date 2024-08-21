"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import localforage from "localforage";
import {
  EnterFullScreenIcon,
  ExitFullScreenIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@radix-ui/react-icons";

type Props = {
  expandFileView: boolean;
  setExpandFileView: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

function ViewFile({
  expandFileView,
  setExpandFileView,
  collapsed,
  setCollapsed,
}: Props) {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    // Fetch the stored file from localForage
    async function fetchFile() {
      try {
        const storedFileData = await localforage.getItem<any>("uploadedFile");
        if (storedFileData) {
          setFile(storedFileData.essayFile);
          console.log("URL", URL.createObjectURL(storedFileData.essayFile));
        }
      } catch (error) {
        console.error("Error retrieving the file:", error);
      }
    }

    fetchFile();
  }, []);
  return (
    <div className={`lg:order-1 col-span-7`}>
      {expandFileView && (
        <Card className="rounded-lg ">
          <CardHeader className="bg-white/5 border-b-2 flex justify-between p-3 rounded-t-lg">
            <div className="flex justify-between">
              <div className="w-fit rounded-md bg-stone-50 font-light text-gray-700 px-3 py-1 ">
                {file ? file.name : "PDF"}
              </div>
              {collapsed && (
                <Button
                  onClick={() => setCollapsed(false)}
                  variant="outline"
                  className="font-semibold text-primary col-start-1 w-fit"
                >
                  Expand & view your file <ArrowRight />
                </Button>
              )}
            </div>

            {!collapsed && (
              <div className=" text-sm font-normal flex items-center justify-between controls">
                <div className="flex gap-2 zoom-controls justify-center">
                  <ZoomOutIcon className=" cursor-pointer text-gray-500 hover:text-black" />
                  <div className="text-gray-500 font-medium">60%</div>
                  <ZoomInIcon className=" cursor-pointer text-gray-500 hover:text-black" />
                </div>
                <div className={`flex gap-2 font-normal text-sm`}>
                  <Button variant="outline" className="w-fit rounded-full">
                    <EnterFullScreenIcon height={15} width={15} className="" />
                  </Button>
                  <Button
                    variant="outline"
                    className="hidden md:flex max-w-fit rounded-full font-light"
                    onClick={() => {
                      // setExpandFileView((prev) => !prev);
                      setCollapsed(true);
                    }}
                  >
                    <ExitFullScreenIcon
                      height={15}
                      width={15}
                      className="mr-1"
                    />{" "}
                    Collapse
                  </Button>
                </div>
              </div>
            )}
          </CardHeader>
          {!collapsed && (
            <CardContent
              className={`flex flex-col gap-2 p-4 my-4 h-96 ${
                collapsed && "hidden"
              }`}
            >
              <CardDescription className="min-h-80 h-full">
                {file ? (
                  <object
                    type={file.type}
                    data={URL.createObjectURL(file)}
                    className="sm:h-full sm:w-full"
                    height={400}
                  ></object>
                ) : (
                  <div>No File Uploaded</div>
                )}
              </CardDescription>
            </CardContent>
          )}
        </Card>
      )}
    </div>
  );
}

export default ViewFile;
