"use client";
import { checkSubdirectory, dbPush } from "@/actions/db";
import { Button } from "@/components/ui/button";
import prisma from "@/utils/db";
import { UploadDropzone } from "@/utils/uploadthing";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Page({params}: {params: {filename: string}}) {
    const [url, setUrl] = useState("");

    useEffect(()=>{
        async function init(){
        let subDir = await checkSubdirectory(params.filename);
        setUrl(subDir);
        }
        init();
    }, [params.filename]);

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
                dbPush(res[0], params.filename);
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
                dbPush(res[0], params.filename);
                alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
            }}
            />
            </>
            }
        <Button onClick={()=>{
            deleteFile(url);
            // setUrl("");
        }} >Delete File</Button>
        </main>
    );
}

async function deleteFile(url: string) {
    const del = await axios.delete("/api/uploadthing", {
        data: {
            url
        }
    });
    console.log(del.data);
}