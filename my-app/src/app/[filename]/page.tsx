"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";


export default function Home() {
    const [url, setUrl] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">UploadThing Example</h1>
        {url && 
            <div className="w-full h-full flex flex-col justify-center mx-auto border">
                <iframe src={url} className="h-full w-full" />
            </div>}
        {!url && <>
      <UploadDropzone
        endpoint="imageUploader" 
        onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            setUrl(res[0].url);
            alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
            // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        />
      <UploadDropzone
        endpoint="pdfUploader"
        onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            setUrl(res[0].url);
            alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
        }}
        />
        </>
        }
    </main>
  );
}