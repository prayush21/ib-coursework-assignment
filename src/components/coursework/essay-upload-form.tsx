"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import localforage from "localforage";
import FileUploadIcon from "../icons/file-upload";
import { Button } from "../ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import EvaluateIcon from "../icons/evaluate";
import { usePathname, useRouter } from "next/navigation";
import { randomUUID } from "crypto";
import GreenTick from "../icons/green-tick";
import CrossIcon from "../icons/cross-icon";

const formSchema = z.object({
  essayFile: z.instanceof(File),
  courseworkType: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  title: z.string().min(2).max(50),
});
type Props = {};

function EssayUploadForm({}: Props) {
  const [fileState, setFileState] = useState<File | null>();
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseworkType: "",
      subject: "",
      title: "",
    },
  });

  const fileRef = form.register("essayFile");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        form.setValue("essayFile", acceptedFiles[0]);
        setFileState(acceptedFiles[0]);
      }
    },
  });

  useEffect(() => {
    // const storedValues = JSON.parse(localStorage.getItem("essayFormData"));
    // if (storedValues) {
    //   console.log("sv", storedValues);
    // }
  }, [form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const id = crypto.randomUUID();
    console.log("id", id);

    if (
      values.essayFile &&
      values.courseworkType &&
      values.subject &&
      values.title
    ) {
      try {
        // Store the file in localForage
        await localforage.setItem("uploadedFile", { ...values, id });
        console.log("File stored successfully:", values);
        router.push(`${pathname}/${id}`);
        // setUpdated(!updated);
      } catch (error) {
        console.error("Error storing the file:", error);
      }
    }

    // const reader = new FileReader();
    // reader.onload = () => {
    //   const fileData = reader.result;
    //   const dataToStore = {
    //     ...values,
    //     essayFile: fileData,
    //   };
    //   localStorage.setItem("essayFormData", JSON.stringify(dataToStore));
    // };
    // reader.readAsDataURL(values.essayFile[0]);
  }

  console.log("form", form.formState);

  return (
    <div className="wrapper flex flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-2 space-y-4"
        >
          <FormField
            control={form.control}
            name="essayFile"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    {/* <Input
                      type="file"
                      placeholder="Input file..."
                      {...fileRef}
                    /> */}

                    <div
                      {...getRootProps({
                        className:
                          "dropzone border min-h-52 border-dashed border-gray-400 rounded-md p-2 flex flex-col gap-2 items-center bg-upload justify-center gap-4",
                      })}
                    >
                      {fileState ? (
                        <div className="flex items-center gap-2 border rounded-md my-auto px-5 py-2 w-fit relative">
                          <GreenTick className=" h-10 w-10" /> {fileState.name}
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setFileState(null);
                              form.resetField("essayFile");
                            }}
                            className=" absolute -top-1 -right-1 z-10 bg-white border rounded-full"
                          >
                            <CrossIcon className="" />
                          </div>
                        </div>
                      ) : (
                        <>
                          <input {...getInputProps()} {...fileRef} />
                          <FileUploadIcon />
                          <div className="text-center">
                            <div>Drag and drop a PDF</div>
                            <div className="text-sm">*Limit 25 MB per file</div>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-fit rounded-3xl text-primary shadow-md shadow-upload-shadow-color"
                          >
                            Upload your file
                          </Button>
                        </>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Label className="my-2">Select your course and subjects*</Label>

          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="courseworkType"
              render={({ field }) => (
                <FormItem className=" w-fit bg-secondary rounded-md">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Coursework Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="IA_Example">IA Example</SelectItem>
                      <SelectItem value="EE_Example">EE Example</SelectItem>
                      <SelectItem value="IO_Example">IO Example</SelectItem>
                      <SelectItem value="TOK_Example">TOK Example</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className=" w-fit bg-secondary rounded-md">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Physics_HL">Physics HL</SelectItem>
                      <SelectItem value="Chemistry_HL">Chemistry HL</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your essay title*</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white w-2/3"
                    placeholder="how nation works..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={`flex gap-2 w-full md:w-fit`}
            variant="secondary"
            type="submit"
            disabled={!form.formState.isValid}
          >
            <EvaluateIcon className=" mr-2" />
            Evaluate your score
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default EssayUploadForm;
