"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const onDropRejected = () => {};
  const onDropAccepted = () => {};

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2-xl flex justify-center flex-col items-center",
        { "ring-blue-900/25 bg-blue-900/10": isDragOver }
      )}
    >
      <div className="flex flex-col relative flex-1 items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
        ></Dropzone>
      </div>
    </div>
  );
};

export default Page;
